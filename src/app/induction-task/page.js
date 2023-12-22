// pages/index.js
'use client'
import Head from 'next/head';
import React, { useState } from 'react';
const Home = () => {
    const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [githubRepoLink, setGithubRepoLink] = useState('');
  const [reasonToJoin, setReasonToJoin] = useState('');
  const [deployedLink, setDeployedLink] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleReasonToJoinChange = (e) => {
    // Limit the input to 500 characters
    if (e.target.value.length <= 500) {
      setReasonToJoin(e.target.value);
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRollNumberChange = (e) => {
    setRollNumber(e.target.value);
  };

  const handleGithubRepoLinkChange = (e) => {
    setGithubRepoLink(e.target.value);
  };

  const handleDeployedLinkChange = (e) => {
    setDeployedLink(e.target.value);
  };
  const validateRollNumber = (rollNumber) => {
    const rollNumberRegex = /^\d{3}[A-Za-z]{2}\d{4}$/;
    return rollNumberRegex.test(rollNumber);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateGithubRepoLink = (githubRepoLink) => {
    const githubRepoRegex = /^https:\/\/github\.com\/[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+$/;
    return githubRepoRegex.test(githubRepoLink);
  };

  const validateDeployedLink = (deployedLink) => {
    const deployedLinkRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/;
    return deployedLinkRegex.test(deployedLink);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        setError('Invalid email address');
      } else if (!validatePhoneNumber(phoneNumber)) {
        setError('Invalid phone number');
      } else if (!validateRollNumber(rollNumber)) {
        setError('Invalid roll number');
      }  else if (!validateGithubRepoLink(githubRepoLink)) {
        setError('Invalid GitHub repo link');
      } else if (!validateDeployedLink(deployedLink)) {
        setError('Invalid deployed link');
      } else {
        setIsLoading(true);
  
        // Perform asynchronous operation without await
        submitFormAsync()
          .then(() => {
            // Form submission logic (replace with actual logic)
            console.log('Name:', name);
            console.log('Phone Number:', phoneNumber);
            console.log('Email:', email);
            console.log('Roll Number:', rollNumber);
            console.log('GitHub Repo Link:', githubRepoLink);
            console.log('Deployed Link:', deployedLink);
            console.log('Reason to Join:', reasonToJoin);
            setError('');
          })
          .catch((error) => {
            console.error('Submission error:', error);
            setError('Error submitting the form');
          })
          .finally(() => {
            setIsLoading(false);
            alert('Form submitted successfully!'); // Alert when form is submitted
            history.push('/success');
          });
      }
    };
  
    // Separate async function for asynchronous operations
    const submitFormAsync = () => {
      // Simulate an asynchronous operation (replace with actual logic)
      return new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      // Additional asynchronous logic can be added here
    };
  return (
    
    <div className="flex flex-col sm:flex-row w-full h-screen overflow-hidden rounded-md">
      <Head>
        <title>Login Form</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
      </Head>

      {/* Left side with image */}
      <div className="sm:w-1/2 relative flex-1">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full absolute  "
          poster="/images/poster.jpg"
        >
          <source src="/Astronot3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Right side with login form */}
      <div className="flex-1 bg-slate-400 p-8 overflow-y-auto relative ">
        <h2 className="text-2xl font-bold mb-4">Webwiz NITRKL</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rollNumber" className="block text-gray-700 font-bold mb-2">
              Roll Number
            </label>
            <input
              type="text"
              id="rollNumber"
              name="rollNumber"
              value={rollNumber}
              onChange={handleRollNumberChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="githubRepoLink" className="block text-gray-700 font-bold mb-2">
              GitHub Repo Link
            </label>
            <input
              type="url"
              id="githubRepoLink"
              name="githubRepoLink"
              value={githubRepoLink}
              onChange={handleGithubRepoLinkChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="deployedLink" className="block text-gray-700 font-bold mb-2">
              Deployed Link
            </label>
            <input
              type="url"
              id="deployedLink"
              name="deployedLink"
              value={deployedLink}
              onChange={handleDeployedLinkChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="reasonToJoin" className="block text-gray-700 font-bold mb-2">
              Why do you want to join in the club? (Max 500 characters)
            </label>
            <textarea
              id="reasonToJoin"
              name="reasonToJoin"
              value={reasonToJoin}
              onChange={handleReasonToJoinChange}
              className="border rounded w-full py-2 px-3"
              rows="4"
              maxLength="500"
              required
            />
          </div>
          <div className="mb-4">
          <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              disabled={isLoading} // Disable the button during loading
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;