import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]',
})
export class CopyToClipboardDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  copyTextToClipboard(): void {
    const textToCopy = this.elementRef.nativeElement.textContent;
    const textArea = document.createElement('textarea');
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    this.showCopiedMessage();
  }

  private showCopiedMessage(): void {
    const tooltip = this.renderer.createElement('div');
    const message = this.renderer.createText('Email copied successfully');
    this.renderer.appendChild(tooltip, message);

    const parentElement = this.elementRef.nativeElement.parentElement;
    this.renderer.appendChild(parentElement, tooltip);

    this.renderer.setStyle(tooltip, 'position', 'absolute');
    this.renderer.setStyle(tooltip, 'top', '50%');
    this.renderer.setStyle(tooltip, 'left', '50%');
    this.renderer.setStyle(tooltip, 'transform', 'translate(-50%, -50%)');
    this.renderer.setStyle(tooltip, 'background-color', 'green');
    this.renderer.setStyle(tooltip, 'color', '#fff');
    this.renderer.setStyle(tooltip, 'padding', '8px');
    this.renderer.setStyle(tooltip, 'border-radius', '4px');
    this.renderer.setStyle(tooltip, 'pointer-events', 'none');

    setTimeout(() => {
      this.renderer.removeChild(parentElement, tooltip);
    }, 2000); // Remove the tooltip after 2 seconds (adjust as needed)
  }
}
