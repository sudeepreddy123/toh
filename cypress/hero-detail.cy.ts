/// <reference types="cypress" />
import { async, TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from '../src/app/hero-detail/hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Hero } from '../src/app/hero';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [HeroDetailComponent],
    imports: [RouterTestingModule, HttpClientTestingModule],
  }).compileComponents();
}));

describe('HeroDetailComponent', () => {
  it('mounts', () => {
    cy.mount(HeroDetailComponent);
  });

  it('displays the hero name correctly', () => {
    const heroName = 'Magneta';
    const hero: Hero = { id: 15, name: heroName };
    cy.mount(HeroDetailComponent, {
      componentProperties: {
        hero: hero,
      },
    });
    cy.get('[data-cy=hero-name]').should('contain', heroName.toUpperCase());
  });
});
