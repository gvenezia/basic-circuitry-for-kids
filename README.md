# Basic Circuitry for Kids!

## Inspiration
We wanted to create a fun, interactive introduction to computer science principles. We were inspired by other CS education tools like Scratch.

## What it does
A web interface provides small interactive lessons and games for children learning the basics of circuitry. This web interface interacts with an arduino board to produce feedback through lights.

Watch a short demo on [Youtube](https://www.youtube.com/watch?v=myDzNeF9KVM)!

## How we built it
The front-end is built with html, vanilla JS, and a sprinkling of CSS. The styling and responsive-design are handled by Bootstrap 4.0.

A small amount of Java handles the back-end logic. It runs on localhost, then writes to 'file.txt' when there is an API call.

An Arduino board reads this text file, and depending on the input, displays lights that match the onscreen inputs and outputs

## Challenges we ran into
We had a very difficult time getting hardware to work. We came to find that we were missing some essential components and so we had to modify our project multiple times.

## What's next for Basic Circuitry for Kids!
A lot more interactivity could built up with the arduino board, motors, and other hardware to facilitate motion. Additionally, we could create more circuitry lessons with more complex problems and more intuitive interactivity (like allowing the users to drag connection wires between nodes with .jsPlumb)

## Built With
HTML, CSS, Vanilla Javascript, Java, Arduino board, Bootsrap 4.0, C++

## How did this project come about? 
It was an educational project for the Uncommon Hacks Hackathon in Chicago, IL (February 2018)

![screenshot of the website](https://github.com/gvenezia/learn-you-dragon/blob/master/pics/circuitryKids.png)

