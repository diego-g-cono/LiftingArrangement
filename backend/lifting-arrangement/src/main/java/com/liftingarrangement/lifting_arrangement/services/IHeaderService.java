package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.Header;

import java.util.List;

public interface IHeaderService {
    public Header getHeader(Long id);
    public List<Header> getHeaders();
    public Header createHeader(Header header);
    public void deleteHeader(Long id);
    public Header updateHeader(Header header);
}
