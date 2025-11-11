'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { FcGoogle } from 'react-icons/fc';
import { FaFirstAid } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Link from 'next/link';

export default function Signin() {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log('Form data:', values);
    setTimeout(() => {
      console.log('Form submitted');
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fc] p-4">
      <Card className="w-full max-w-6xl h-auto p-4 md:p-6 bg-[#fdfdfd] border-hidden rounded-2xl flex flex-col">
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden rounded-xl">
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 py-10 overflow-auto relative">
            <div className="absolute top-4 left-4 flex items-center space-x-2">
              <FaFirstAid className="text-blue-600 text-xl sm:text-2xl" />
              <h1 className="text-base sm:text-lg font-bold text-gray-800 truncate">
                Medtech-Mavericks
              </h1>
            </div>

            <div className="w-full max-w-sm mx-auto mt-16 sm:mt-24">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  Sign in to MedixPro
                </h2>
                <p className="text-sm text-gray-500">
                  All Your Hospital Needs in One Place.
                </p>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({  }) => (
                  <Form className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="mb-3">
                        Email
                      </Label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="medtech@gmail.com"
                        className="border p-2 rounded-md w-full "
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <Label htmlFor="password" className="mb-3">
                        Password
                      </Label>
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        className="border p-2 rounded-md w-full"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />

                      <div className="flex justify-end mt-1">
                        <button
                          type="button"
                          className="text-xs text-blue-600 hover:underline cursor-pointer"
                        >
                          Forgot password?
                        </button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm cursor-pointer"
                      
                    >
                      sign in
                    </Button>

                    <div className="flex flex-col items-center space-y-4 w-full max-w-sm mx-auto">
                      <div className="flex items-center w-full">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-3 text-gray-500 text-sm">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 w-full">
                        <button
                          type="button"
                          className="flex items-center justify-center w-full gap-2 border rounded-md py-2 hover:bg-gray-50 transition cursor-pointer"
                        >
                          <FcGoogle className="text-xl" />
                          <span className="text-sm font-medium text-gray-700">
                            Continue with Google
                          </span>
                        </button>
                      </div>
                    </div>

                    <p className="text-center text-xs text-gray-500">
                      Don&apos;t have an account?{' '}
                      <Link href="/signup" className="text-blue-600 hover:underline">
                        Register
                      </Link>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-[#f8f9fc] flex items-center justify-center overflow-hidden rounded-xl mt-10 lg:mt-0">
            <Card className="border-0 shadow-none bg-transparent w-full h-full flex items-center justify-center">
              <CardContent className="p-6 flex flex-col items-center justify-between text-center h-full">
                <div className="relative w-[95%] h-[70vh] sm:h-[60vh] lg:h-[85%] mb-4 flex items-center justify-center">
                  <Image
                    src="/dashboard.png"
                    alt="Dashboard Preview"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>

                <div className="flex flex-col items-center justify-center px-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Transform Hospital Management
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-base max-w-sm">
                    All your hospital&apos;s operations, patients, staff, billing,
                    and inventory — managed seamlessly in one place to boost
                    efficiency and care.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
