import { TestBed } from '@angular/core/testing';

import { UserloginService } from './userlogin.service';

describe('ServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserloginService = TestBed.get(UserloginService);
    expect(service).toBeTruthy();
  });
});
