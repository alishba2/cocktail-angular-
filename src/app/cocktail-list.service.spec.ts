import { TestBed } from '@angular/core/testing';

import { CocktailListService } from './cocktail-list.service';

describe('CocktailListService', () => {
  let service: CocktailListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
