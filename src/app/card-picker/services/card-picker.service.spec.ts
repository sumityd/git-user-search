import { TestBed } from '@angular/core/testing';

import { CardPickerService } from './card-picker.service';

describe('CardPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardPickerService = TestBed.get(CardPickerService);
    expect(service).toBeTruthy();
  });
});
