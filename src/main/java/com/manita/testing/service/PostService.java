package com.manita.testing.service;

import com.manita.testing.domain.model.Post;
import com.manita.testing.domain.repository.PostRepository;
import com.manita.testing.exception.CustomException;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PostService {
    // Post Repository
    private final PostRepository postRepository;

    public Post createPost(Post post){
        // Crear un nuevo post
        return postRepository.save(post);
    }

    public Post getPostById(Long postId){
        return postRepository.findById(postId).
                orElseThrow(() -> new CustomException("No se encontro el post"));
    }

    public Page<Post> getAllPosts(Pageable pageable){
        return postRepository.findAll(pageable);
    }

    public Post updatePost(Long postId, Post postRequest){
        // Obtener el post existente
        Post post = postRepository.findById(postId).orElseThrow(() -> new CustomException("no se encontro el post"));

        // Actualizar el post
        post.setTitle(postRequest.getTitle());
        post.setDescription(postRequest.getTitle());
        post.setContent(postRequest.getContent());

        // Guardarlo en la base de datos
        return postRepository.save(post);
    }

    public ResponseEntity<?> deletePost(Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new CustomException("Post not found"));
        postRepository.delete(post);
        return ResponseEntity.ok().build();
    }
}
