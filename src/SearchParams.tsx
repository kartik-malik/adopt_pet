import React, {
  useState,
  useEffect,
  useContext,
  FunctionComponent
} from "react";
import pet, { ANIMALS, Animal } from "@frontendmasters/pet";
import Results from "./Result";
import useDropdown from "./useDropdown";
import ThemeContext from "./ThemeContext";
import { RouteComponentProps } from "@reach/router";

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);
  const [breeds, setBreeds] = useState([] as string[]);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([] as Animal[]);
  const [theme, setTheme] = useContext(ThemeContext);
  async function requestpets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);
  }
  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(
      ({ breeds }) => {
        const breedString = breeds.map(({ name }) => name);
        setBreeds(breedString);
      },

      console.error
    );
  }, [animal, setBreeds, setBreed]);
  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestpets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="peru">Peru</option>
            <option value="darkblue">dark blue</option>
            <option value="mediumorchid">medium orchid</option>
            <option value="chartreuse">chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
