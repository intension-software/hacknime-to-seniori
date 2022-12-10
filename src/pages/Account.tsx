import { FC } from 'react'
import './Account.css';

const Account: FC = () => {
  return (
    <div className="Account">
      <div className='AccHeader'>
        <div style={{display: "flex", alignItems: "center"}}>
          <img className='img' src="./images/profile.png" />
          <div className='AccTitle'>Jozef Švagerko    <img width="45px" height="45px"src="./images/star.png" />4.1</div>
        </div>
        <form action="mailto:webmaster@example.com">
          <button className='Button2' >Kontaktovať</button>
        </form>
      </div>
      <div className='AccBody'>
        <div>
          <div className='AccTitle2'>Oblasť</div>
          <div className='AccBadge'>Poprad</div>
          <img width="500px" height="250px" src="./images/map.png"/>
        </div>
        <div>
          <div className='AccTitle2'>Krátke BIO</div>
          <div>Jozef Švagerko je technicky zdatný človek, ktorý dokáže rýchlo pochopiť aj náročnejšie technické záležitosti. Je obľúbený medzi staršími ľuďmi, s ktorými si rád zakamaráti a trávi s nimi svoj voľný čas. Jeho netrpezlivosť však niekedy prekáža a môže viesť k nedorozumeniam. Aj napriek tomu je veľmi spoločenský a rád trávi čas s ľuďmi. Jozef je nižšieho vzrastu, čo mu však nijako nebráni v tom, aby dosiahol veľké veci.</div>
          <div className='AccTitle2'>Expertíza</div>
          <div style={{display: "flex", width:"500px", gap:"1rem", marginTop: "1rem"}}>
            <div className='Badge'>Online Komunikácia</div>
            <div className='Badge'>Cestovné poriadky</div>
            <div className='Badge'>Správy</div>
          </div>
        </div>  
        </div>
    </div>
  );
}

export default Account;
