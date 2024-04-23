import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CreatorService } from './services/creator.service';

export const authGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('creator')) {
    return true;
  }

  const creatorService = inject(CreatorService);
  return creatorService.isCreatorLoggedIn;
};
