import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { NgForOf } from "@angular/common";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
        NgForOf
    ]
})
export class ProfileComponent implements OnInit {

    items: string[] = []; // List items
    isHeaderHidden = false; // Controls visibility of header
    private lastScrollTop = 0; // Keeps track of last scroll position

    ngOnInit() {
        this.generateItems();
    }

    private generateItems() {
        const count = this.items.length + 1;
        for (let i = 0; i < 50; i++) {
            this.items.push(`Item ${count + i}`);
        }
    }

    onIonInfinite(event: InfiniteScrollCustomEvent) {
        this.generateItems();
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }

    // Scroll event handler
    onScroll(event: any) {
        const scrollTop = event.detail.scrollTop;

        if (scrollTop > this.lastScrollTop && scrollTop > 100) {
            // Scrolling down
            this.isHeaderHidden = true;
        } else if (scrollTop < this.lastScrollTop) {
            // Scrolling up
            this.isHeaderHidden = false;
        }

        this.lastScrollTop = scrollTop;
    }
}
