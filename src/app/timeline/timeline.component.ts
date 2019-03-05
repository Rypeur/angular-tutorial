import {Component, OnInit} from '@angular/core';
import {Tweet} from '../tweet';


@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
    tweets: Tweet[] = [
        {
            created_at: 'Wed Apr 05 12:30:12 +0000 2017',
            id: 1,
            text: 'Je mets les pieds où je veux, Little John… et c\'est souvent dans la gueule.',
            user: 'James Braddock',
            favoriteCount: 0
        },
        {
            created_at: 'Thu Apr 06 15:24:15 +0000 2017',
            id: 2,
            text: 'Qui a deux pouces et qui s\'en fout ? Bob Kelso !',
            user: 'Bob kelso',
            favoriteCount: 0
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onSave(tweetText: HTMLInputElement) {

        const newTweet = {};
        newTweet.created_at = new Date();
        newTweet.text = tweetText;
        newTweet.user = 'quentin';
        newTweet.id = this.tweets.length + 1;
        this.tweets.push(newTweet);
    }

    onLike(tweet: object, like: HTMLInputElement, dislike: HTMLInputElement) {
        tweet.favoriteCount++;
        if (tweet.favoriteCount > 0) {
            like.className = 'fas fa-arrow-alt-circle-up';
            dislike.className = 'far fa-arrow-alt-circle-down';
        }

    }

    onHover(like: HTMLInputElement) {
        like.style.cursor = 'pointer';
    }

    onDislike(tweet: object, dislike: HTMLInputElement, like: HTMLInputElement) {
        tweet.favoriteCount--;
        if (tweet.favoriteCount < 0) {
            dislike.className = 'fas fa-arrow-alt-circle-down';
            like.className = 'far fa-arrow-alt-circle-up';
        }


    }

}
