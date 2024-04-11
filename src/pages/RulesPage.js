import React from 'react'
import Navbar from '../compenents/Navbar'
import FooterPage from './FooterPage'



function RulesPage() {
  return (
    <div>
        <Navbar> </Navbar>
        <div className='content_bg'> 
          <h3> Rules Page</h3>
          <p> We're expert in this field whole over the world </p>
        </div>
        <div className='rules'>
          <div className='container'>
            <p> <img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/> Please read the following rules carefully before signing in.</p>

            <p> <img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/>  You agree to be of legal age in your country to partake in this program, and in all the cases your minimal age must be 18 years.</p>

            <p><img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/>   is not available to the general public and is opened only to the qualified members of , the use of this site is restricted to our members and to individuals personally invited by them. Every deposit is considered to be a private transaction between the  and its Member.</p>
              
            <p><img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/>  As a private transaction, this program is exempt from the US Securities Act of 1933, the US Securities Exchange Act of 1934 and the US Investment Company Act of 1940 and all other rules, regulations and amendments thereof. We are not FDIC insured. We are not a licensed bank or a security firm.</p>
              <p><img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/> You agree that all information, communications, materials coming from  
              are unsolicited and must be kept private, confidential and protected from any 
              disclosure. Moreover, the information, communications and materials contained 
              herein are not to be regarded as an offer, nor a solicitation for investments 
              in any jurisdiction which deems non-public offers or solicitations unlawful, 
              nor to any person to whom it will be unlawful to make such offer or solicitation.</p>


            <p> <img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/>  All the data giving by a member to  will be only privately used and not disclosed to any third parties.  is not responsible or liable for any loss of data.
              are investing at your own risk and you agree that a past performance is not 
              an explicit guarantee for the same future performance. You agree that all information, 
              communications and materials you will find on this site are intended to be regarded 
              as an informational and educational matter and not an investment advice.</p>
              
            <p> <img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/>  We reserve the right to change the rules, commissions and rates of the program 
              at any time and at our sole discretion without notice, especially in order to 
              respect the integrity and security of the members' interests. You agree that 
              it is your sole responsibility to review the current terms. </p>


            <p> <img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/>  is not responsible or liable for any damages, losses and costs resulting from any violation of the conditions and terms and/or use of our website by a member. You guarantee to  that you will not use this site in any illegal way and you agree to respect your local, national and international laws.</p>

            <p> <img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/>  Don't post bad vote on Public Forums and at Gold Rating Site without contacting the administrator of our program FIRST. Maybe there was a technical problem with your transaction, so please always CLEAR the thing with the administrator.</p>

            <p>  <img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/> We will not tolerate SPAM or any type of UCE in this program. SPAM violators will be immediately and permanently removed from the program.</p>

            <p> <img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/>   reserves the right to accept or decline any member for membership without explanation.</p>

            <p><img src="./images/but_img.png" alt="say_img1" class="img-fluid img1"/>  If you do not agree with the above disclaimer, please do not go any further.</p>

            </div>
        </div>

        <FooterPage></FooterPage>
    </div>
  )
}

export default RulesPage

