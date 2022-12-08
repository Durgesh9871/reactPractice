import styles from "./CountriesCard.module.css";

function CountriesCard(prop) {
  const {country , population} = prop
  return (
  <div data-testid="country-card" className={styles.container}>
      <div>
        Country: <b data-testid="country-card-name">{country}</b>
      </div>
      <div>
        Population: <b data-testid="country-card-population">{population}</b>
      </div>
    </div>
  );
}

export default CountriesCard;
