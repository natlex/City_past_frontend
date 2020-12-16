import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { environment } from '../../../../environments/environment.sample';
import { GoogleMapConfigService } from '../../services/google-map-config.service';
import { GoogleMapScriptLoaderService } from '../../services/google-map-script-loader.service';
import { GoogleMapScriptLoaderMockService } from '../../../tests/services/google-map-script-loader-mock.service';
import { GoogleMapComponent } from './google-map.component';

let component: GoogleMapComponent;
let fixture: ComponentFixture<GoogleMapComponent>;

describe('GoogleMapComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleMapComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: GoogleMapConfigService,
          useValue: environment.googleMapApiKey,
        },
        {
          provide: GoogleMapScriptLoaderService,
          useClass: GoogleMapScriptLoaderMockService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapComponent);
    component = fixture.componentInstance;
  });

  tests();
});

function tests() {
  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeNull();
  });

  it('should render google-map tag', () => {
    const compiled = <HTMLElement>fixture.debugElement.nativeElement;

    expect(compiled.querySelector('google-map')).not.toBeNull();
  });
}
