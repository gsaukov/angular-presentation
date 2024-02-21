import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MutationObserverService {

  observer: MutationObserver
  num: number
  volume: number

  constructor() {
    const element = document.querySelector('app-root')!
    console.log(element)
    this.num = 0
    this.volume = 0
    this.observer = new MutationObserver((mutations: MutationRecord[]) => {
        mutations.forEach((m: MutationRecord) => {
          if (this.isDomModification(m)) {
            this.num = this.num + 1
            m.addedNodes.forEach(n => {
                this.volume = this.volume + JSON.stringify(n).length
              }
            )
          }
        });
      }
    );

    this.observer.observe(element, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    });

  }

  isDomModification(mutation: MutationRecord): boolean {
    const addedNodes = mutation.addedNodes
    const removedNodes = mutation.removedNodes
    if ((addedNodes && addedNodes.length > 0) || (removedNodes && removedNodes.length > 0)) {
      return true
    } else {
      return false
    }
  }


}
