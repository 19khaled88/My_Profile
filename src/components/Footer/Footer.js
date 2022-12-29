import React from 'react'
import '../../CSS/footer.css'
const Footer = () => {
  return (
    <div className="Footer-section">
      <div>
        <div className="Footer">
          <div>
            <span>
              <div>
                <img
                  src="/user.png"
                  alt="No Image"
                  width="30px"
                  height="30px"
                />
                <h2>Khaled Ahasan</h2>
              </div>

              <p>
                When an unknown prnoto sans took a galley and scrambled it to
                make specimen book not only five When an unknown prnoto sans
                took a galley and scrambled it to five centurie.
              </p>
            </span>
            <span>
              <div>
                <img
                  src="/location.png"
                  alt="No Image"
                  width="30px"
                  height="30px"
                />
                <h3>Address</h3>
              </div>
              <p>123 Main Street New York, NY 10001</p>
            </span>
          </div>
          <div>
            <div>
              <img
                src="/clipboard.png"
                alt="No Image"
                width="30px"
                height="30px"
              />
              <h2>Projects</h2>
            </div>
            <span>
              <p>Project One</p>
              <p>Project Two</p>
              <p>Project Three</p>
              <p>Project Four</p>
              <p>Project Five</p>
            </span>
          </div>
          <div>
            <div>
              <img
                src="/abilities.png"
                alt="No Image"
                width="30px"
                height="30px"
              />
              <h2>Skills & Tools</h2>
            </div>
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
            <div>
              <img src="/mail.png" alt="No Image" width="30px" height="30px" />
              <h2>Send Message</h2>
            </div>
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
            <a href="https://www.facebook.com/khaled88hasan"><img src="/facebook.png" alt="No Image" width="30px" height="20px" />facebook</a>
            <a href="https://www.linkedin.com/in/khaled-hasan-5101988/"><img src="/linkedin.png" alt="No Image" width="30px" height="20px" />LinkedIn</a>
            <a href="https://github.com/19khaled88"><img src="/github.png" alt="No Image" width="30px" height="20px" />Github</a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
