/* eslint-disable @next/next/no-img-element */
import { NavigationBar } from "@/components/NavigationBar";

export default function FreshBreath() {
    return (
        <div className="bg-theme-light pb-20 md: min-h-screen ">
            <div className="">
                <NavigationBar></NavigationBar>
            </div>
            <div
                className="hero h-72"
                style={{
                    backgroundImage: "url(/images/advice.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold p-8 text-white ">
                            Privacy Policy
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-10/12 mx-auto pt-10 leading-loose md:pt-20 md:w-2/4 ">
                <p>
                    The practice aims to meet the requirements of the Data
                    protection Act 2018, the general Data Protection Regulation
                    (GDPR), the guidance on the Information Commissioners
                    website as well as our professional guidelines and
                    requirements.
                </p>
                <p className="pt-4">The data controller is Dr Tariq Yunus</p>
                <p className="pt-4">
                    This privacy notice is available on the practice website, at
                    reception or by email.
                </p>
                <p className="pt-8">The categories of data we process are:</p>
                <ul className="list-disc list-inside text-left pt-4">
                    <li className="pb-2">
                        Personal data for the purposes of staff and self
                        employed team member management
                    </li>
                    <li className="pb-2">
                        Personal data for the purpose of email/text marketing
                    </li>
                    <li className="pb-2">
                        Special category data including health records for the
                        purpose of the delivery of health care
                    </li>
                    <li className="pb-2">
                        Special category data including health records and
                        details of criminal record checks for managing employees
                        and contracted team members
                    </li>
                </ul>
                <p className="pt-8">
                    We never pass your personal details to a third party unless
                    we have a contract for them to process data on our behalf
                    and we will otherwise keep it confidential. If we intend to
                    refer a patient to another practitioner or to secondary care
                    such as a hospital we will gain the individuals permission
                    before the referral is made and the personal data is shared.
                </p>
                <ul className="list-disc list-inside text-left pt-4">
                    <li className="pb-2">
                        Personal data is stored in the EU whether in digital or
                        hard copy format
                    </li>
                    <li className="pb-2">
                        Personal data is stored in the US in digital format,
                        when the data storage company is certified with the
                        EU-US Privacy Shield
                    </li>
                    <li className="pb-2">
                        Personal data is obtained when a patient joins the
                        practice or when a patient is referred to the practice.
                    </li>
                </ul>
                <p className="pt-8">
                    The lawful basis for processing special category data such
                    as patients’ and employees’ health data is:
                </p>
                <ul className="list-disc list-inside text-left pt-4">
                    <li className="pb-2">
                        Processing is necessary for the purpose of preventative
                        or occupational medicine, for assessing the working
                        capacity of the employee, medical diagnosis, the
                        provision of health or social care or treatment or
                        management of health or social care systems and services
                        on the basis of union or member state law or a contract
                        with a health professional.
                    </li>
                </ul>
                <p className="pt-8">
                    The lawful basis of processing personal data such as name,
                    address, email or phone number is:
                </p>
                <ul className="list-disc list-inside text-left pt-4">
                    <li className="pb-2">Consent of the data subject</li>
                    <li className="pb-2">
                        Processing is necessary for the performance of a
                        contract with the data subject or to take steps to enter
                        into a contract
                    </li>
                </ul>
                <p className="pt-8">
                    The retention period for special data in patient records is
                    a minimum of 10 years and may be longer for complex records
                    in order to meet our legal requirements. The retention
                    period for staff records is 6 years. The retention period
                    for other personal data is 2 years after it was last
                    processed.
                </p>
                <p className="pt-8">
                    You have the following personal data rights:
                </p>
                <ul className="list-disc list-inside text-left pt-4">
                    <li className="pb-2">The rights to be informed</li>
                    <li className="pb-2">The rights to access</li>
                    <li className="pb-2">The rights to rectification</li>
                    <li className="pb-2">
                        The rights to erasure (clinical records must be retained
                        for a certain time period)
                    </li>
                    <li className="pb-2">The right to restrict processing</li>
                    <li className="pb-2">The right to data portability</li>
                    <li className="pb-2">The right to object</li>
                </ul>
                <p className="pt-8">
                    Further details of these rights can be seen in our
                    Information Governance Procedures or at the information
                    commissioner’s website. Here are some practical examples of
                    your rights:
                </p>
                <ul className="list-disc list-inside text-left pt-4">
                    <li className="pb-2">
                        If you are a patient of the practice you have a right to
                        withdraw consent for important notifications.
                        Newsletters, surveys or marketing. You can inform us to
                        correct errors in your personal details or withdraw
                        consent from communication methods such as telephone,
                        email or text.
                    </li>
                </ul>
                <p className="pt-8">
                    The details of how we ensure security of personal data is in
                    our information governance procedures.
                </p>
                <p className="pt-8 font-bold">
                    COMMENTS, SUGGESTIONS AND COMPLAINTS
                </p>
                <p className="pt-2">
                    Please contact Dr T Yunus or Mrs O Yunus at the practice for
                    a comment, suggestion or a complaint about your data
                    processing. We take complaints very seriously.
                </p>
                <p className="pt-8">
                    If you are unhappy with our response or if you need any
                    advice you should contact the Information Commissioners
                    Office (ICO). Their telephone number is 0303 123 1113, you
                    can also chat online with an advisor. The ICO can
                    investigate your claim and take action against anyone whose
                    misused personal data. You can also visit their website for
                    information on ‘how to make a data protection complaint’
                </p>
                <p className="pt-8">
                    You can also use these contact details to request copies of
                    the following practice policies or procedures:
                </p>
                <ul className="list-disc list-inside text-left pt-4">
                    <li className="pb-2">
                        Data protection and data security policy, consent policy
                    </li>
                    <li className="pb-2">Information governance procedures</li>
                </ul>
            </div>
        </div>
    );
}
