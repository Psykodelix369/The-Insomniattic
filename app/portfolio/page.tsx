// app/portfolio/page.tsx
import Navbar from "../../components/Navbar";

const poems = [
  {
    title: "Trippin'",
    meta: "Wayne Long",
    body: `I feel like I should be writing,
But kinda feel like I am dying.
Yet so alive warm and cuddly.
No longer third eye blind, yet fuzzy.

So much vibrance in this world to see!
Don't believe me?
Just read my poem about BEAUTY.

My soul is screaming pointing the way,
Though the world is so loud...
Keeping it's wishes at bay.
Don't know which way to go...
The answer is so fucking obvious!
Finding it hard to let go...
Feelings so monstrous and preposterous!

Latching on they strangle...
So tragically dangerous and unstable!
Just trying to find MY angle.
Don't know where I fit in ....?
Should I settle in,
Try to blend in?
Something akin,
To a clay mold for demonstrating.
An American Idol for representing,
A populace that is failing!!!

To see what is right before you...

Lift the VEIL!
Please! Realize! We are creating our own.. hell!`,
  },
  {
    title: "Puzzled",
    meta: "Wayne Long · 8.11.2021",
    body: `Life is a puzzle..
Just don't give in to the struggle.
Be quick to adapt,
Though know it's ok if you get in trouble.
People will be quick to clap,
Till you fumble.
Walk away because you stumbled,
Not caring how your whole life has crumbled.

Don't know which way to go?
In this place of mystery...
Well let me hand you the key,
To at least what worked for me
In helping to unlock my destiny....

Nothing else matters!!!
Only YOU!!!
Wait... Hold On! Here this through...
Know that before you come at me,
That I am not here on the attack
Focus on you and what you
Put into this existence.
Spread Love and compassion.
Excuse ignorance
Even when displayed as a passion.
Try to understand
Instead of being combative.
You never know what planted,
The seed that grew into
What stands before you today.

This world is not black and white!
It's filled with gray...
Not red or blue!
Please!
Hear what I say...
Read between the lines,
See that the truth is not always easy to find.
Remember no matter how much we wish...
We can never hit rewind!
So do your best! And be kind! ❤️💯`,
  },
  {
    title: "Untitled",
    meta: "Wayne Long · 12.26.2020",
    body: `Feelings of enlightenment,
Sufferings of non excitement.
The ways in which I've dealt,
With what's left of this heart.
Just trying to smelt...
Not sure what's left with... This pain it's felt.

Worn like a thorn,
That's loosened from a lion.
Prick of a rose,
Nothing left to be crying.
Void of all certain emotion...
Calloused may need lotion.

All sense of well being Is fleeing...
Escape from this reality?
Not likely...
Abruptly!
I wish to be an absentee...
With uncertainty...
My heart disagrees...
I'm just looking for some kind of peace.

Walking alone...
Through this life to atone...
Sins I've committed,
Others so faithfully remitted.
All is due in a time yet to be told,
Asking for the courage to watch it unfold.
For what I seek,
Is in a future yet so bleak.
You see though my friend...
The sun will rise again.
To new beginnings and a happy end.`,
  },
  {
    title: "The Game (Addiction)",
    meta: "Wayne Long · 2.23.23",
    body: `As my fingers dance across the phone screen,
My eyes lock in just like a machine,
The thrill of each victory, the rush of every play,
I can't help wanting, to game my life away.

A puzzle here, or a battle there,
At my screen I continue to stare.
My phone has become a main source of fun,
Many games to play, more battles to be won.

The hours pass, as the world fades out,
Immersing myself in this virtual bout,
The life that surrounds me slipping away,
Dedicating my focus on winning every day.

I know I should stop, put it down,
But the game addiction keeps me bound,
The need to play, to win, to conquer,
Leaves me lost in a digital wonder.

Yet deep within, I can see the truth,
This gaming addiction has stolen youth,
Time and life that which I'll never reclaim,
Lost to the allure of another game.

So I'll fight to put my phone away,
And face the world, come what may,
For life is more than just in-game,
A real victory?
Living this life without masking the pain.`,
  },
  {
    title: "The Conscious Design",
    meta: "Wayne Long · 5.16.2025",
    body: `The thoughts that get lost
In the recesses of our
Intricately connected and limitless minds.
Speak of many divine and tall tales
We only Share behind our own enemy lines.

Right here between each ear,
Where everything you fear,
Or hold so dear…
Can be entirely rewritten
In the blink of the eye.
Leaving one reeling and now third eye blind.

This is the beautiful horror
Of the infinitely exquisite expanses
Within the one conscious design.

Stay You! Stay True!`,
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <div className="pageWrap">
        <h1 className="pageTitle">Portfolio</h1>
        <p className="pageIntro">
          A growing collection of work born from sleepless nights.
        </p>

        {poems.map((poem) => (
          <article key={poem.title + poem.meta} className="poemCard">
            <h2 className="poemTitle">{poem.title}</h2>
            <p className="poemMeta">{poem.meta}</p>
            <p className="poemBody">{poem.body}</p>
          </article>
        ))}
      </div>
    </>
  );
}
