import React from "react";
import { useForm } from 'react-hook-form';
import { Clock, Mail, MapPin, Phone } from "lucide-react";



const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Message sent successfully!');
    reset(); // clears the form
  };
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col items-center justify-center px-4 py-30">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-20 mt-6 text-center">

        <span className="text-[#4B50A5]">Get In Touch</span> <span className="text-[#4B50A5]"></span>
      </h1>
      <p className="text-gray-800 text-xl text-center max-w-2xl mb-10 -mt-10 ">
        Ready to take your trading to the next level? Get in touch with our
        experts for personalized guidance and support.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-50 w-full max-w-7xl">
        {/* Contact Form */}
        <div className="bg-[#ffffff]rounded-2xl p-20 shadow-2xl lg:w-[700px]">
          <h2 className="text-3xl font-bold mb-6 -mt-8 text-[#4B50A5]">Send Us a Message</h2>
          <p className="text-pink-400 text-lg mb-8">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form className="space-y-4">
          <div className="">
        
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full border border-[#4B50A5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B50A5]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Enter a valid email'
                  }
                })}
                className="w-full border border-[#4B50A5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B50A5]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium mb-1 ">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Enter a valid 10-digit phone number'
                  }
                })}
                className="w-full border border-[#4B50A5] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B50A5]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-1">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                {...register('message', { required: 'Message is required' })}
                placeholder="How can we help you ?"
                className="w-full border border-[#4B50A5] rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#4B50A5]"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
          
          </form>
        </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              <span>Send Message</span>
            
            </button>
            <p className="text-sm text-pink-400 mt-2">
              * Required fields. We respect your privacy and will never share your information.
            </p>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#4B50A5] rounded-xl p-6 shadow-md lg:w-[550px]">
            <h3 className="text-2xl font-bold mb-6 mt-4  text-white">Contact Information</h3>
            <p className="flex items-center gap-2 text-xl mb-2">
  <Mail className="text-white" size={24} />
  <span className="text-white">  sivvginfotechpvtltd@gmail.com</span>
</p>

            <p className="flex items-center text-white gap-2 text-xl mb-2">
            <Clock className="text-white" size={24} />
              Monday – Friday : During Trading Hours Only
            </p>
            <p className="flex items-center gap-2 text-xl mb-2">
            <MapPin className="text-white" size={24} />
              <span className="text-white">Marikavalasa – Visakhapatnam</span>
            </p>
            <p className="flex items-center gap-2 text-lg">
            <Phone className="text-white" size={24} />
               <span className="text-white">+91 9988776655</span>
            </p>
          </div>

          <div className="bg-[#4B50A5]rounded-xl p-6 shadow-2xl lg:w-[550px]">
            <h3 className="text-2xl font-bold mb-6 mt-4 text-[#4B50A5]">Quick Response</h3>
            <p className="text-xl mb-2 text-gray-600">Average response time: Market hours</p>
            <p className="text-lg text-pink-500">
              Our dedicated support team is committed to providing you with prompt, professional assistance for all your
              trading questions and concerns.
            </p>
          </div>

          <div className="bg-[#4B50A5] rounded-xl p-6 shadow-md text-center  lg:w-[550px]">
            <p className="text-2xl font-bold mb-6 mt-4  text-white">Interactive Map</p>
            <p className="text-xl font-bold mb-6 mt-4  text-white">Visakhapatnam , India</p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
    
export default ContactSection;