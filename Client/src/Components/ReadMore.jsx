import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ReadMore = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const trendingBooks = [
    {
      id: 1,
      title: "The Ocean Between Us",
      description: "A captivating tale of love and discovery.",
      image: "https://i.ibb.co/93g5bzv/the-occean.jpg",
      readers: "1.2K Readers",
      author: "John Doe",
      summary:
        "On the surface Grace Bennett has it all --- three wonderful children, a devoted husband and a life of adventure and travel. But somewhere between her husband Steve's demanding career, raising a family, the constant uprooting and the Navy's routine, Grace has lost her sense of self. And when a nearly forgotten secret resurfaces, her discontent comes into sharp focus. Something needs to change. She needs to change.Then duty calls. Now, separated by an ocean of regrets and longing, Grace and Steve are forced to take a hard look at their faltering marriage. But when the unthinkable happens, Grace is left to face a Navy wife's worst nightmare --- the cold truth that life's biggest chances can slip away while you're looking for guarantees.",
    },
    {
      id: 2,
      title: "Whispers of the Forgotten",
      description: "Uncover the mysteries hidden within ancient ruins.",
      image: "https://i.ibb.co/3CZ0XwC/whisper.webp",
      readers: "1.1K Readers",
      author: "Jane Smith",
      summary: `Once upon a time, in a small village nestled at the edge of an ancient forest, there existed a secret that had been forgotten through the passing generations. Whispers of this enigma permeated the village, filling the air with a sense of intrigue and curiosity.In this village lived a young girl named Lily, with ebony curls that cascaded down her back and eyes that held a hint of adventure. Lily was captivated by the rumors of the forgotten secret and the mysteries that surrounded it. Determined to uncover the truth, she embarked on a journey that would forever change her life.Guided by the faint whispers that echoed in her dreams, Lily ventured deep into the heart of the enchanted forest. The trees stood tall, their ancient branches reaching towards the sky, as if beckoning her forward. Step by step, she followed a narrow path, feeling the weight of anticipation building within her.
     
       As she wandered deeper into the forest, the whispers grew louder, and an ethereal glow enveloped the surroundings. In a secluded clearing, Lily discovered a hidden stone pedestal, upon which rested a weathered tome. Its pages, filled with ancient symbols and faded ink, revealed the forgotten history of the village.
    
The book spoke of a lost treasure that lay hidden beneath the village square, a treasure that possessed the power to restore prosperity and joy to the community. It was said to be guarded by mythical creatures, its whereabouts concealed by a veil of enchantment.

Driven by a newfound purpose, Lily returned to the village, determined to unravel the secrets of the hidden treasure. She sought the help of her fellow villagers, gathering a band of brave souls who were eager to restore the village’s lost prosperity.

Together, they embarked on a quest, facing numerous trials and overcoming formidable challenges. Along the way, they encountered magical beings, wise sages, and treacherous obstacles. Each encounter provided clues and tests of their determination, but also bestowed upon them the strength and wisdom needed to continue.

Through their unwavering determination and unity, Lily and her companions unearthed the hidden entrance to the underground chamber where the treasure awaited. It was a breathtaking sight — a cavern adorned with glittering jewels, golden artifacts, and ancient scrolls that held the wisdom of their ancestors.

As they gazed upon the treasure, a sense of awe and gratitude filled their hearts. They realized that the true treasure lay not in the material wealth but in the journey they had undertaken together — the bonds they had formed, the challenges they had overcome, and the wisdom they had gained.
<br>
With the village’s prosperity restored, the forgotten secret became a tale passed down from one generation to another. The whispers of the forgotten transformed into stories of hope, reminding the villagers that sometimes, it is in the pursuit of a dream that we discover our true strength.

And so, the village thrived, and Lily, forever changed by her journey, became a guardian of the forgotten secret, ensuring that its essence and the lessons learned would never be lost again. The whispers of the forgotten became a source of inspiration for all, a reminder that within every challenge lies the potential for growth and a chance to uncover the treasures hidden within.`,
    },
    {
      id: 3,
      title: "Echoes of Eternity",
      description: "A mystery spanning across time.",
      image: "https://i.ibb.co/2ZfXbDP/eternity.jpg",
      readers: "800 Readers",
      author: "Aaron Dembski-Bowden",
      summary:
        "The walls have fallen. The defenders’ unity is broken. The Inner Palace lies in ruins. The Warmaster’s horde advances through the fire and ash of Terra’s dying breaths, forcing the loyalists back to the Delphic Battlement, the very walls of the Sanctum Imperialis. Angron, Herald of Horus, has achieved immortality through annihilation – now he leads the armies of the damned in a wrathful tide, destroying all before them as the warp begins its poisonous corruption of Terra. For the Emperor’s beleaguered forces, the end has come. The Khan lies on the edge of death. Rogal Dorn is encircled, fighting his own war at Bhab Bastion. Guilliman will not reach Terra in time. Without his brothers, Sanguinius – the Angel of the Ninth Legion – waits on the final battlements, hoping to rally a desperate band of defenders and refugees for one last stand.Wow… how do you fit all that in? There are so many Primarchs still left on Terra or interacting with Terra, and there must have been a strong temptation to tell these stories, but Dembski-Bowden doesn’t – or rather he does, but through the eyes of others.The book starts with a setting of the scene of war – which is essentially a series of short stories of those fighting. The author gives a superb view of the war, with pockets of soldiers fighting, tanks under attack, titan deaths and attacks on the Eternity Gate. These short stories bring the war to the gates, as the defenders (mostly Blood Angels) prepare and await their fate.The second part is the attack itself, interspersed by the story of Vulkan and Magnus, and has the fight between the Blood Angels and Ka’Banda; and between Sanguinius and Angron. Meanwhile the Eternity gate is still under threat and the Emperor’s shield against the forces of the warp (The Neverborn) starts to weaken under constant assault.It’s a great addition to the series – and my favourite one so far. We are approaching the end, and it’s great to have the iconic fights included but still see the battle and fighting from the view of more normal people — if ‘normal’ includes the Space Marines!",
    },
  ];

  const book = trendingBooks.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found.</p>;
  return (
    <div className="py-28">
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
          <img
            src={book.image}
            alt={book.title}
            className="rounded-lg w-full h-64 object-cover mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {book.title}
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="text-gray-700 text-justify mb-4">{book.summary}</p>
          <button
            onClick={() => navigate("/")}
            className="block w-full py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 text-center"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
