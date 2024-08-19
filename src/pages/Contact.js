import React from 'react';
import emailjs from 'emailjs-com';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mail: '',
            telephone: '',
            topic: '',
            text: '',
            message: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, mail, telephone, topic, text } = this.state;

        emailjs.sendForm('service_a2jvjmj', 'template_krr2fum', e.target, 'ICt4wp6oqWOFFAUkU')
            .then((result) => {
                console.log(result.text);
                this.setState({ message: 'Email sent successfully!' });
            }, (error) => {
                console.log(error.text);
                this.setState({ message: 'Error sending email.' });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="text-center py-5">
                    <h1 className="display-3 fw-light">Napisz do nas!</h1>
                </div>
                <div className="row text-center d-flex ">
                    <div className="col col-md-5 col-lg-4">
                        <div className="border align-self-stretch p-5 mb-4">
                            <h2>KONTAKT</h2>
                            <p className="mt-4 fw-bold text-uppercase">adres</p>
                            <p>ul. Niewiadoma 0</p>
                            <p>00-000 Warszawa</p>
                            <p className="mt-4 fw-bold text-uppercase">telefon</p>
                            <p>+48 000 000 000</p>
                            <p className="mt-4 fw-bold text-uppercase">e-mail</p>
                            <p>tropico.kontakt@outlook.com</p>
                        </div>
                    </div>
                    <div className="col col-md-7 col-lg-8">
                        <div className="border p-5 mb-4 text-center">
                            <h2>formularz kontaktowy</h2>
                            <form className="mt-5" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group mb-4">
                                            <label>Imię i nazwisko</label>
                                            <input type="text" name="name" className="form-control" onChange={this.handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-4">
                                            <label>Adres mailowy</label>
                                            <input type="email" name="mail" className="form-control" onChange={this.handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-4">
                                            <label>Telefon</label>
                                            <input type="tel" name="telephone" className="form-control" onChange={this.handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-4">
                                            <label>Temat</label>
                                            <input type="text" name="topic" className="form-control" onChange={this.handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label>Wypisz treść wiadomości</label>
                                        <textarea name="text" className="form-control" rows="6" onChange={this.handleChange}></textarea>
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-primary">Wyślij!</button>
                                    </div>
                                </div>
                            </form>
                            {this.state.message && <p>{this.state.message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
