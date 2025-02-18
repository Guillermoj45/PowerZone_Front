import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'bold'
})
export class BoldPipe implements PipeTransform {
    transform(value: string): string {
        if (!value) return value;
        return value
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    }
}
