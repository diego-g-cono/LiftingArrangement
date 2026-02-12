package com.liftingarrangement.lifting_arrangement.controllers;

public record RegisterRequest (
    String email,
    String password,
    String name)
{}
