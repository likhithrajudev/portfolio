// One verse per day: the site shows verses[dayNumber % verses.length].
// The English is a plain-language rendering, not a quote from one specific translation.

export type Verse = { ref: string; text: string };

export const verses: Verse[] = [
    { ref: "2.13", text: "Just as the soul passes through childhood, youth and old age in this body, so it passes into another body. The wise are not bewildered by this." },
    { ref: "2.14", text: "The contact of the senses with their objects gives rise to cold and heat, pleasure and pain. They come and go and do not last, so bear them patiently." },
    { ref: "2.20", text: "The soul is never born and never dies. It did not come into being, nor will it cease to be. It is unborn, eternal and ancient, and it is not slain when the body is slain." },
    { ref: "2.22", text: "As a person puts on new garments and gives up old ones, the soul accepts new bodies and gives up the old and useless ones." },
    { ref: "2.38", text: "Treat pleasure and pain, gain and loss, victory and defeat alike, and then engage in the fight. Acting this way, you incur no sin." },
    { ref: "2.47", text: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, nor be attached to inaction." },
    { ref: "2.48", text: "Be steadfast in yoga and perform your duty, giving up attachment to success and failure. This evenness of mind is called yoga." },
    { ref: "2.50", text: "One who is established in this wisdom leaves behind both good and bad results even in this life. Therefore strive for yoga, which is skill in action." },
    { ref: "2.56", text: "One whose mind is not shaken by sorrow, who does not crave pleasure, and who is free from attachment, fear and anger, is called a sage of steady wisdom." },
    { ref: "2.70", text: "Like the ocean, which stays still while rivers keep flowing into it, is the person who is not disturbed by the constant flow of desires. Only they find peace, not the one who tries to satisfy every desire." },
    { ref: "3.19", text: "Therefore, without attachment, always do the work that has to be done. By working without attachment, a person reaches the Supreme." },
    { ref: "3.21", text: "Whatever a great person does, others follow. Whatever standard they set, the world pursues." },
    { ref: "3.27", text: "All actions are carried out by the qualities of nature, yet a person deluded by ego thinks, “I am the doer.”" },
    { ref: "3.35", text: "It is better to do your own duty imperfectly than to do another's duty perfectly. Death in one's own duty is better; another's duty is full of danger." },
    { ref: "4.7", text: "Whenever righteousness declines and unrighteousness rises, Arjuna, I come into being." },
    { ref: "4.18", text: "One who sees inaction in action, and action in inaction, is wise among people." },
    { ref: "4.38", text: "In this world there is nothing as purifying as knowledge. One who has become perfected in yoga finds it within the self in due time." },
    { ref: "5.10", text: "One who acts without attachment, offering the results to the Supreme, is untouched by sin, as a lotus leaf is untouched by water." },
    { ref: "5.18", text: "The wise see with an equal eye a learned and humble person, a cow, an elephant, a dog and an outcaste." },
    { ref: "6.5", text: "Lift yourself by your own mind, and do not let yourself sink. The mind alone is the friend of the self, and the mind alone is its enemy." },
    { ref: "6.6", text: "For one who has conquered the mind, the mind is the best of friends. For one who has failed to do so, the mind remains the greatest enemy." },
    { ref: "6.17", text: "One who is moderate in eating and recreation, moderate in action, and moderate in sleep and waking, can end suffering through yoga." },
    { ref: "6.35", text: "The mind is restless and very hard to restrain, no doubt, but it can be controlled by constant practice and detachment." },
    { ref: "9.22", text: "To those who worship me with devotion, meditating on me alone, I carry what they lack and preserve what they have." },
    { ref: "9.26", text: "If someone offers me with love and devotion a leaf, a flower, a fruit or water, I accept it." },
    { ref: "12.13", text: "One who hates no being, who is friendly and compassionate, free from possessiveness and ego, the same in pleasure and pain, and forgiving, is dear to me." },
    { ref: "12.15", text: "One who does not agitate the world, and is not agitated by it, and who is free from joy, envy, fear and anxiety, is dear to me." },
    { ref: "16.21", text: "There are three gates to this hell, ruinous to the self: lust, anger and greed. Therefore one should give up all three." },
    { ref: "17.15", text: "Speech that causes no distress, that is truthful, pleasant and beneficial, along with regular study of scripture, is called the austerity of speech." },
    { ref: "17.16", text: "Serenity of mind, gentleness, silence, self-control and purity of heart are called the austerity of the mind." },
    { ref: "18.66", text: "Let go of all other duties and take refuge in me alone. I will free you from all sin. Do not grieve." },
    { ref: "18.78", text: "Wherever there is Krishna, the master of yoga, and Arjuna, the archer, there will be fortune, victory, prosperity and sound judgement. This is my conviction." },
];

// Whole days since 1970 for the viewer's local calendar date, so everyone sees a new verse at their own midnight
export function verseForToday(now = new Date()): Verse {
    const day = Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86_400_000);
    return verses[day % verses.length];
}
