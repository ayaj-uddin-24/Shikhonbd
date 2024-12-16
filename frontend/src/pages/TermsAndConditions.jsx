import React from "react";
import { Helmet } from "react-helmet";

const TermsAndConditions = () => {
  return (
    <div className="px-5 sm:px-[5vw] lg:px-[9vw] py-5">
      <Helmet>
        <title>Terms and Conditions | ShikhonBD</title>
        <meta
          name="description"
          content="Read the terms and conditions for using ShikhonBD's resources, including guidelines for PDF usage, copyright policies, and prohibited activities."
        />
        <link
          rel="canonical"
          href="https://www.shikhonbd.com/terms-and-conditions"
        />
      </Helmet>

      {/* Bengali Section */}
      <section lang="bn">
        <h1 className="text-3xl font-bold">শর্তাবলী এবং নিয়মাবলী</h1>
        <p className="font-bold mt-4">
          শিখনবিডির পিডিএফ ফাইল ব্যবহার নীতিমালা:
        </p>
        <p className="mt-4">
          শিখনবিডি সবার জন্য বিনামূল্যে পিডিএফ নোট, শীট এবং সাজেশন প্রকাশ করে
          থাকে। একজন শিক্ষার্থী, শিক্ষক এবং অভিভাবক হিসেবে আপনি এই রিসোর্সগুলো
          সম্পূর্ণ বিনামূল্যে ব্যবহার করতে পারেন তবে কিছুক্ষেত্রে আমাদের পরিসেবা
          গ্রহণে অর্থ প্রদান করার প্রয়োজন হতে পারে। তবে এগুলো কেবলমাত্র
          ব্যক্তিগত ব্যবহারের জন্য, কোনোভাবেই বাণিজ্যিক কাজের স্বার্থে ব্যবহার
          করতে পারবেন না।
        </p>
        <p className="mt-4">
          শিখনবিডি থেকে সংগ্রহ করা রিসোর্সগুলো নাম, লোগো এবং জলছাপ পরিবর্তন করে
          ব্যবহার করা সম্পূর্ণ অনৈতিক এবং এটি কপিরাইট আইনের অধীন। আমরা কোনোভাবেই
          এমন কর্মকাণ্ডের অনুমতি দেই না। তাই শিখনবিডি হতে প্রাপ্ত পিডিএফ নোট,
          শীট এবং সাজেশন অপরিবর্তিত অবস্থায় ব্যবহার একান্ত কাম্য।
        </p>
        <h2 className="text-2xl font-bold mt-6">
          শিখনবিডি ব্যবহার করুন নিম্নলিখিত শর্ত সাপেক্ষে:
        </h2>
        <ol className="list-decimal pl-8 mt-4">
          <li>
            শিখনবিডিতে প্রকাশিত নিবন্ধগুলি শুধুমাত্র তথ্য এবং ব্যক্তিগত
            ব্যবহারের জন্য।
          </li>
          <li>
            এই ওয়েবসাইটে ব্যবহৃত ব্যক্তিগত তথ্য বা উপাত্ত সম্পূর্ণরূপে নিজ
            দায়িত্বে।
          </li>
          <li>
            শিখনবিডির মালিকানাধীন উপাদানগুলি অনুমতি ব্যতীত ব্যবহার থেকে বিরত
            থাকুন।
          </li>
          <li>অন্য ওয়েবসাইটের লিঙ্ক ব্যবহারে শিখনবিডি কোনো দায় নেবে না।</li>
        </ol>
        <h2 className="text-2xl font-bold mt-6">আপনি যা থেকে বিরত থাকবেন:</h2>
        <ol className="list-decimal pl-8 mt-4">
          <li>শিখনবিডির নিবন্ধ বা উপাদান অন্য ওয়েবসাইটে প্রকাশ করবেন না।</li>
          <li>বাণিজ্যিক কাজে শিখনবিডির উপাদান ব্যবহার করবেন না।</li>
        </ol>
      </section>

      {/* English Section */}
      <section lang="en" className="mt-8">
        <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        <p className="font-bold mt-4">
          Usage Policy for ShikhonBD's PDF Files:
        </p>
        <p className="mt-4">
          ShikhonBD provides free PDF notes, sheets, and suggestions for
          everyone. As a student, teacher, or guardian, you can use these
          resources entirely free of charge. However, certain services may
          require a payment. These resources are strictly for personal use and
          cannot be used for commercial purposes under any circumstances.
        </p>
        <p className="mt-4">
          It is unethical and a violation of copyright law to modify the name,
          logo, or watermark of resources collected from ShikhonBD. We do not
          permit such actions. Therefore, it is essential to use ShikhonBD's PDF
          notes, sheets, and suggestions in their original, unaltered state.
        </p>
        <h2 className="text-2xl font-bold mt-6">
          Use ShikhonBD under the following conditions:
        </h2>
        <ol className="list-decimal pl-8 mt-4">
          <li>
            The articles published on ShikhonBD are for general information and
            personal use only. Modifications are subject to change without
            notice.
          </li>
          <li>
            Any personal data used on this website is entirely your
            responsibility.
          </li>
          <li>
            Materials owned by ShikhonBD, such as articles, images, and videos,
            should not be used elsewhere without permission.
          </li>
          <li>
            External links provided are for convenience. ShikhonBD is not
            responsible for their content.
          </li>
        </ol>
        <h2 className="text-2xl font-bold mt-6">Prohibited Activities:</h2>
        <ol className="list-decimal pl-8 mt-4">
          <li>Do not publish ShikhonBD's articles on any other website.</li>
          <li>Do not share ShikhonBD's images or videos on other platforms.</li>
          <li>
            Refrain from using ShikhonBD's materials for commercial purposes.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default TermsAndConditions;
