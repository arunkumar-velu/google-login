import { TestBed } from '@angular/core/testing';

import { FreshchatService } from './freshchat.service';

describe('FreshchatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreshchatService = TestBed.get(FreshchatService);
    expect(service).toBeTruthy();
  });
});
