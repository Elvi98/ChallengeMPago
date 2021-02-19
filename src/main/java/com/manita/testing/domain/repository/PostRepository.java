package com.manita.testing.domain.repository;

import com.manita.testing.domain.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
    Post findByTitle(String title);
}
