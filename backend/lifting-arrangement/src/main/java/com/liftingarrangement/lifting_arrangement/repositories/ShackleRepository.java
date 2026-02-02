package com.liftingarrangement.lifting_arrangement.repositories;

import com.liftingarrangement.lifting_arrangement.models.Shackle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShackleRepository extends JpaRepository<Shackle, Long> {
}
