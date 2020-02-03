import { TestBed } from '@angular/core/testing';

import { ActionsLogService } from './actions-log.service';

describe('ActionsLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionsLogService = TestBed.get(ActionsLogService);
    expect(service).toBeTruthy();
  });
});
