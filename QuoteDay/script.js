// All quotes are stored here. The user will be promped for input and it will display a quote based on their input
var quotes = [
    "\"Success is not how high you have climbed, but how you make a positive difference to the world.\" - Roy T. Bennett",
    '"What seems to us as bitter trials are often blessings in disguise." - Oscar Wilde',
    '"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer',
    '"Your time is limited, so don\'t waste it living someone else\'s life." - Steve Jobs',
    '"Opportunities don\'t happen. You create them." - Chris Grosser'
];

var enterNumber = prompt("Enter a number:");
var rem = enterNumber%5 
document.write(quotes[rem]);

