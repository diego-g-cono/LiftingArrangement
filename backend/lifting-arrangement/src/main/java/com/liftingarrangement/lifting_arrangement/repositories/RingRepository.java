package com.liftingarrangement.lifting_arrangement.repositories;

import com.liftingarrangement.lifting_arrangement.models.Ring;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RingRepository extends JpaRepository<Ring, Long> {
}
