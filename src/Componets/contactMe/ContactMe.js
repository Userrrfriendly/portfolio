import React from 'react';
import './contactme.css';
import GitHubLinkedInIconLink from '../GitHub-LinkIn-Icon/GitHubLinkedInIconLink';
import FunkyHeader from '../FunkyText/FunkyHeader';

class ContactMe extends React.Component {
    state = {
        fullName: "",
        company: "",
        role: "",
        email: ""
    }

    render() {
        return (
            <main className="main-contact">
                <div className="contact-me-container">
                    <div className="animation-container">
                        <div className="text-container">
                            <h1 className="animated-text animated fadeInDown" aria-label='Lets talk!'><FunkyHeader text='Lets talk!' /></h1>
                        </div>
                        {/* <div className="animated-div"></div> */}
                        <section className="contact-me-section">
                            <h2 aria-label='Drop me a line to get started.'><FunkyHeader text="Drop me a line to get started." /></h2>
                            <form
                                action="mailto:tsigourof_ben@hotmail.com"
                                onSubmit={e=>{
                                    e.preventDefault();
                                    window.setTimeout(()=>{
                                        console.log('inSetTIMEOUT')
                                  this.setState({
                                                fullName:'',
                                                company:'',
                                                role:'',
                                                email:''
                                            })
                                    },1000)
                                    console.log('timeout');
                                }}
                                method="post"
                                encType="text/plain">
                                <p className="contact-me-text">My name is &nbsp;
                                    <input
                                        className="contact-input"
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        placeholder="Full Name"
                                        onChange={e => this.setState({fullName: e.target.value})}
                                        value={this.state.fullName}
                                        aria-label="full name"/>
                                    &nbsp;and I'm with &nbsp;
                                    <input
                                        className="contact-input"
                                        type="text"
                                        name="companyName"
                                        id="company"
                                        placeholder="Company Name"
                                        onChange={e => this.setState({company: e.target.value})}
                                        value={this.state.company}
                                        aria-label="company name"/>
                                    &nbsp;.I am in need of a &nbsp;
                                    <input
                                        className="contact-input"
                                        type="text"
                                        name="role"
                                        id="context"
                                        placeholder="JavaScript Developer"
                                        onChange={e => this.setState({role: e.target.value})}
                                        value={this.state.role}
                                        aria-label="role"/>
                                    . You can reach me at &nbsp;
                                    <input
                                        className="contact-input"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email Address"
                                        onChange={e => this.setState({email: e.target.value})}
                                        value={this.state.email}
                                        aria-label="email address"/>
                                    &nbsp;to get the conversation started. Thanks!
                                </p>
                                <div className='contact-submit-container'>
                                    <a 
                                        onClick={e => {
                                            window.setTimeout(()=>{
                                                this.setState({
                                                    fullName:'',
                                                    company:'',
                                                    role:'',
                                                    email:''
                                                });
                                            },0)
                                            }
                                        }
                                        className='contact-send-mail'
                                        href={`mailto:tsigourof_ben@hotmail.com?subject=Hi Ben!&body=My name is ${this.state.fullName || '*full name*'} and I'm with ${this.state.company || '*company name*'}. I am in need of a ${this.state.role || ' *role*'}. You can reach me at ${this.state.email || '*email adress*'} to get the conversation started. Thanks!`}>Send
                                    </a>
                                </div>
                        
                            </form>
                        </section>
                    </div>
                        <div className='contact-icon-container'>
                            <GitHubLinkedInIconLink iconName='gitHub' width='80px' height='80px'/>
                            <GitHubLinkedInIconLink iconName='linkedIn' width='80px' height='80px'/>
                        </div>
                </div>
            </main>

        )
    }
}
export default ContactMe;