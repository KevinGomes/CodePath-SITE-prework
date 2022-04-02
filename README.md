# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Kevin Gomes**

Time spent: **7** hours spent in total

Link to project: https://screeching-prickle-comfort.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Changed webpage title, and added a personalized favicon

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://github.com/KevinGomes/CodePath-SITE-prework/blob/main/walkthrough_prework_00.gif)
![](https://github.com/KevinGomes/CodePath-SITE-prework/blob/main/walkthrough_prework_01.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* https://stackoverflow.com
* https://developer.mozilla.org/en-US/docs/Web/CSS
* https://developer.mozilla.org/en-US/docs/Web/HTML
* https://developer.mozilla.org/en-US/docs/Web/JavaScript
* https://mixbutton.com/mixing-articles/music-note-to-frequency-chart

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
        
    The major challenge I faced came with the implementation of the decreasing of playback speed. To add this feature to my website I eliminated the constant modifier from the "holdTime" variable. Then after the end of each turn the playback speed would decrease by 100 milliseconds. This worked well until I gave users three chances to make a mistake before they see a game over alert. In the case of an incorrect guess the game would replay the last sequence in order to give the player another chance; at the time the playback speed would continue to decrease during this replay, which in turn made the game more difficult and defeated the purpose of the second chance. Even worse, due to this three strike rule the total number of rounds that could be played in a single game went from eight to ten. This resulted in the playback speed dropping a full 1000 milliseconds, leaving barely any time for users to see the pattern and absolutely no time for audio to play. 
    
    I was able to fix this issue by adding an additional check within the "playClueSequence()" function. The three strikes that the player had were counted by a "wrongGuesses" variable. Next I created a variable, "wasWrong", to hold the total amount of incorrect guesses that existed before the "playClueSequence()" function was called. I then compared the value of wrongGuesses to the value of wasWrong, if they were the same the last input was correct in which case the playback speed would decrease normally. However if "wrongGuesses" was greater than "wasWrong" then the last input was incorrect, in which case the "wasWrong" is set equal to "wrongGuesses" and the playback speed remains unchanged.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
My current questions concerning web development are,  
* **What would be considered an appropriate amount of time to complete a project? Is it up to your discretion?**  
I personally feel that the amount of time that I took to complete this project was extremely inflated. I am curious as to how much time should be put into a project that has no real deadline.  
* **What exactly is Node.js? What about PHP? How do these two compare?**  
While researching web development the items Node.js and PHP both came up and were referenced several times. From my understanding these are backend features of some sort, but I am not exactly sure as to what they are capable of or how to utilize them.  
* **How can I display my elements in different patterns and orientations?**  
My current project is, in one word, rectangular. The current display of objects on my webpage is square, but for a future implementation of this game I want to somehow organize my buttons in different patterns. In short, I would like to learn how to further manipulate how a webpage looks

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had additional time to work on this project I have three features that I would add.  
**A seventh button and appropriate placement:** A seventh color button would allow me to work with a complete octave of notes. I have already implemented notes C through A in my project using an online frequency table as a reference. I did not do so in my current submission as seven buttons are awkward to display. However if I were to somehow be able to display the buttons in a circular pattern my website becomes much more presentable.  
**Pre-charted songs:** Rather than relying on a randomly populated array, I can create five arrays to store the notes of five different songs. This would be possible if I had seven buttons rather than the current six, as I can utilize music within a single octave. I can also change the octave that each note is in depending on the song chosen, allowing my game more versatility. The random assignment would be repurposed from populating an array, to randomly choosing a song. To be completely transparent this would be an incredibly tedious feature to implement.  
**Difficulty levels:** An additional button that will cycle through EASY, NORMAL, and HARD modes. Each difficulty is categorized by increasingly long patterns, faster button flashes and a shorter timer limiting how long a user has to input their guesses. For this feature to be compatible with the previous one, I would need to add three versions of each song to match the additional difficulty levels.

## Interview Recording URL Link

https://drive.google.com/file/d/19PRf6OpD96nD0tZTIR5ctmnHCbKAmPvp/view?usp=sharing


## License

    Copyright KEVIN GOMES

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
