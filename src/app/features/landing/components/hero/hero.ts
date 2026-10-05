import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { fixcoreAppLinks } from '../../../../core/config/fixcore-app';
import { LanguageService } from '../../../../core/i18n/language.service';
import { Icon, IconName } from '../../../../shared/components/icon/icon';
import { scrollToSection } from '../../scroll-to-section';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly i18n = inject(LanguageService);
  protected readonly registerUrl = computed(() => fixcoreAppLinks.register(this.i18n.lang()));

  protected readonly stars = [1, 2, 3, 4, 5];
  protected readonly clients: { name: string; icon: IconName }[] = [
    { name: 'InduPro', icon: 'layers' },
    { name: 'SolMex', icon: 'sun' },
    { name: 'AceroVit', icon: 'tv' },
    { name: 'MetalCorp', icon: 'wrench' },
  ];

  protected goTo(event: Event, id: string): void {
    event.preventDefault();
    scrollToSection(id);
  }
}
