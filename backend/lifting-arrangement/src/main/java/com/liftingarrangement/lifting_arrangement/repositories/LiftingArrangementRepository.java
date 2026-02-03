package com.liftingarrangement.lifting_arrangement.repositories;

import com.liftingarrangement.lifting_arrangement.models.LiftingArrangement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LiftingArrangementRepository extends JpaRepository<LiftingArrangement, Long> {
}
