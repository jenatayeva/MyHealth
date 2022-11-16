import React from 'react'
import hospitalPic from '../../imgs/kardialogiya.png'
const HospitalInfo = () => {
  return (
    <div className='container hospital-info'>
        <div className='text-info'>
          <h1>Kardiyalogiya Ylmy-Kliniki Merkezi Hassahanasy</h1>
          <p>Berkarar döwletimiziň Bagtyýarlyk döwri her bir pudaga, her bir adama özüňin özgerdiji güyji bilen täsir etdi. Türkmenistan dünýäde uly abraýy bolan, ykdysady taýdan kuwwatly döwlete öwrüldi. Bularyň hemmesi Çuňňur hormatlanýan Prezidentimiz Gurbanguly Berdimuhamedowyň pähimli ýolbaşçylygynyň, halk hakdaky aladalarynyn, Watanymyzy ösdürmeklik üçin edýän bimöçber yhlasynyň, ýadawsyz gözlegleriniň miwesidir.
Türkmenistanyň Saglygy goraýyş we derman senagaty ministrliginiň ýolbaşçylygynda 2011-2030 - njy ýyllar üçin ýurtda ýürek- damar keselleriniň garşysyna goreş strategiýasynyň kabul edilip, durmuşa ornaşdyrylmagy hem ilatyň saglygyny dikeltmäge oňaýly täsirini yetirdi.
Kardiologiýa ylmy - kliniki merkezli hassahananyň işgärleri Türkmenistanyň hormatly Prezidenti Gurbanguly Berdimuhamedowyn “Saglyk” we “Türkmenistany durmuş - ykdysady taýdan ösdürmegiň 2011-2030-njy yyllar üçin Milli maksatnamasynda” ilatyň saglygyny goramagyň hilini we netijeliligini ýokarlandyrmak boýunça goýlan meseleleri çözmekligi üstünlikli amala aşyrýarlar.
Ýurdumyzda kardiologiýa gullugyny ugrukdyryjy ylmy-amaly merkez hökmünde kardiologiýa ylmy-kliniki merkezli hassahananyň ylmy işgärleri tarapyndan        ýürek- damar keselleri bolan näsaglaryň saglygyny dikeltmek üçin toplumlaýyn maksatnama işlenip düzüldi. Bu maksatnama bejergini iň amatly ýagdaýa          getirmäge, näsaglaryň hassahanada geçirýän wagtlaryny azaltmaga mümkinçilik berer.</p>
        </div>
        <div className='img-info'>
          <img src={hospitalPic} alt='hospitalName'/>
        </div>
    </div>
  )
}

export default HospitalInfo;