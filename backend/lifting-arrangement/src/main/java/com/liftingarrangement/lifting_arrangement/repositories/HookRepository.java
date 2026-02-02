package com.liftingarrangement.lifting_arrangement.repositories;

import com.liftingarrangement.lifting_arrangement.models.Hook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HookRepository extends JpaRepository<Hook, Long> {
}
