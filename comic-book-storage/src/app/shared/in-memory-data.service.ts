import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let comics = [
      {
        id: 1,
        title: 'Superman(first edition)',
        coverUrl: 'http://www.thecomicbooks.com/old/super1.jpg',
        publicationDate: '01/08/1939',
        genre: 'Superhero',
        excerpt:
        'In the Summer of 1939, Superman continued to show his success. He was the very first hero to get a comic book fully devoted to telling his adventures. Up until this point, all comic books had a variety of characters and stories in them.',
        writtenBy: ['Bill Finger', 'Denny O\'Neil'],
        publisher: 'DC Comics'
      },
      {
        id: 2,
        title: 'Action Comics #1',
        coverUrl: 'http://www.thecomicbooks.com/old/action1.gif',
        publicationDate: '01/06/1938',
        genre: 'Superhero',
        excerpt:
        'Flash Gordon and The Shadow were neat, but they could not lift a car over their heads and throw it at someone! Nor could they let bullets bounce off their chests, or run faster than a train, or leap over tall buildings in a single bound. To say the least, Superman was a fitting name.',
        writtenBy: ['Len Wein', 'Gerry Conway', 'Grant Morrison'],
        publisher: 'DC Comics'
      },
      {
        id: 3,
        title: 'Marvel Comics #1',
        coverUrl: 'http://www.thecomicbooks.com/old/marvel1.gif',
        publicationDate: '01/10/1939',
        genre: 'Superhero',
        excerpt:
        'Among this group was Bill Everett, who created Prince Namor the Sub-Mariner for this book. Other heroes from this comic are The Human Torch, created by Carl Burgos, Ka-Zar, The Angel, and The Masked Raider (who was a Lone Ranger rip-off).',
        writtenBy: ['Gerry Conway', 'Grant Morrison'],
        publisher: 'Marvel Comics'
      }
    ];
    return {comics};
  }
}
