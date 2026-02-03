package com.liftingarrangement.lifting_arrangement.repositories;

import com.liftingarrangement.lifting_arrangement.models.WireSling;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WireSlingRepository extends JpaRepository<WireSling, Long> {
}
