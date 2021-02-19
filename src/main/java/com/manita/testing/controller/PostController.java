package com.manita.testing.controller;

import com.manita.testing.domain.model.Post;
import com.manita.testing.resource.PostResource;
import com.manita.testing.service.PostService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class PostController {

    private final ModelMapper modelMapper;
    private final PostService postService;

    @PostMapping("/posts")
    public PostResource createPost(@RequestBody PostResource postResource){
        Post post = convertToEntity(postResource);
        return convertToResource(postService.createPost(post));
    }

    // Moderl Mapper functions
    private Post convertToEntity(PostResource resource) {
        return modelMapper.map(resource, Post.class);
    }

    private PostResource convertToResource(Post entity) {
        return modelMapper.map(entity, PostResource.class);
    }

}
