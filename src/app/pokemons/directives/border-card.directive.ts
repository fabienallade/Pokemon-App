import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]"
})
export class BorderCardDirective {
  private initialColors: string = "#f5f5f5"
  private defaultColor: string = "#009088"
  private defaultHeight: number = 200

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColors)
    this.setHeight(this.defaultHeight)
    this.borderColor = "009088"
  }

  private setBorder(color: string) {
    let border = "solid 4px " + color
    this.el.nativeElement.style.border = border
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + "px"
  }

  @Input("pkmnBorderCard") borderColor: string

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.defaultColor)
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColors)
  }

}
