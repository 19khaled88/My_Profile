import React from 'react'
import '../../CSS/footer.css'
const Footer = () => {
  return (
    <div className="Footer-section">
      <div>
        <div className="Footer">
          <div>
            <span>
              <h2>Khaled Ahasan</h2>
              <p>
                When an unknown prnoto sans took a galley and scrambled it to
                make specimen book not only five When an unknown prnoto sans
                took a galley and scrambled it to five centurie.
              </p>
            </span>
            <span>
              <h3>Address</h3>
              <p>123 Main Street New York, NY 10001</p>
            </span>
          </div>
          <div>
            <h2>Projects</h2>
            <span>
              <p>Project One</p>
              <p>Project Tow</p>
              <p>Project Three</p>
              <p>Project Four</p>
              <p>Project Five</p>
            </span>
          </div>
          <div>
            <h2>Skills & Tools</h2>
            <span>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>ReactJs</p>
              <p>NodeJs</p>
              <p>MongoDB</p>
            </span>
          </div>
          <div>
            <h2>Send Messagae</h2>
            <div>
              <label>Email :</label>
              <input type="email" name="email" placeholder="Email address" />
              <label>Message :</label>
              <textarea
                type="text"
                name="text"
                placeholder="Your Message"
              ></textarea>
              <button className="btn btn-primary btn-sm">Send</button>
            </div>
          </div>
        </div>

        <div className="copyRight_link">
          <div>
            <span>&copy;Created by</span> Md. Khaled Ahasan
          </div>
          <ul>
            <li>facebook</li>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
