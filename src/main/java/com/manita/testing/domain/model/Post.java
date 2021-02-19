package com.manita.testing.domain.model;

import lombok.Data;
import javax.persistence.*;

@Data // lombok
@Entity
@Table(name = "posts")
public class Post extends AuditModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private String content;
}
