import React from "react";

function TermsConditions() {
    const terms = [
        {
            type: 'General',
            points: ['These terms and conditions govern the relationship between Elite VIP Services and the client for the provision of VIP services at airports.'
                , ' By booking our services, you agree to be bound by these Terms.'
            ]
        },
        {
            type: 'Services',
            points: ['We will provide the VIP services as described in our brochure, website, or as agreed upon in writing.',
                'We reserve the right to modify or cancel services due to unforeseen circumstances.'
            ]
        },
        {
            type: 'Service Duration and Fees',
            points: ['Our standard rates for UK airports cover the first 3 hours of service, which includes VIP meets for arrivals, departures, or connections.',
                'After the initial 3 hours, an additional fee of £50 per hour will be charged for continued service.'
            ]
        },
        {
            type: 'Late Booking Fee',
            points: ['A £50 late booking fee will be applied to any bookings made within 24 hours of the start of the 3-hour departure service or the start of the arrival service.']
        },
        {
            type: 'Payment',
            points: ['All payments for services completed shall be paid within 10 days of when the invoice is sent.',
                'We accept major credit cards and bank transfers.'
            ]
        },
        {
            type: 'Client Responsibilities',
            points: ['It is the responsibility of the Client to provide driver details and all relevant information required for the service at least 6 hours before the service begins.']
        },
        {
            type: 'Limitations of Service',
            points: ['Elite VIP Services staff are not able to:',
                'Hold infants',
                'Push prams or wheelchairs',
                'Look after unattended luggage'
            ]
        },
        {
            type: 'Third-Party Services',
            points: [' When we arrange third-party services (such as porter or chauffeur services or Golf carts ) on your behalf and provide confirmation, we act solely as your agent. We do not have control over the provision of these services.',
                'We do not guarantee that products and services provided by third parties will always conform to their exact description.'
            ]
        }, {
            type: 'Liability',
            points: ['We are not responsible for losses, damages, or costs resulting from circumstances beyond our control or the actions of third parties.',
                'We are not liable for any losses, costs, or expenses caused by third-party actions, including but not limited to delays or issues with Customs or Immigration Authorities at airports.'
            ]
        }, {
            type: 'Client Compliance',
            points: [' You are responsible for ensuring compliance with all airport regulations, immigration requirements, and documentation necessary for your travel. This includes but is not limited to delays at immigration queues and customs declarations, which are out of the control of Elite VIP, and we shall in no way be held liable for any loss.']
        }, {
            type: 'Cancellation',
            points: ['Cancellations made within less than 24 hours ,  notice may incur a cancellation fee.',
                'The cancellation fee will be an additional £50'
            ]
        }, {
            type: 'Confidentiality',
            points: ['We will maintain the confidentiality of all Client information.',
                'We will not disclose any Client information to third parties without prior consent.'
            ]
        }, {
            type: 'Governing Law',
            points: ['These Terms will be governed by and construed in accordance with the laws of the United Kingdom.']
        }, {
            type: 'Changes to Terms',
            points: ['We reserve the right to update or modify these Terms at any time.',
                'Changes will be effective immediately upon posting on our website.'
            ]
        }
    ];
    return (
        <div className="w-full px-4 md:px-20 mt-16 pt-5 bg-gray-800 overflow-x-hidden ">
            <h1 className="text-white font-bold text-4xl text-center">Terms & Conditions</h1>
            {terms.map((item, ind) => (

                <div key={ind} className="mb-6 ">
                    <h2 className="text-lg font-semibold mb-2 text-white">
                        {item.type}
                    </h2>
                    <ul className="pl-4 space-y-1 ">
                        {item.points.map((point, pointInd) => (
                            <li key={pointInd} className="text-sm text-gray-50 break-words leading-relaxed">
                                {`${ind + 1}.${pointInd + 1}`} {point}
                            </li>
                        ))}
                    </ul>
                </div>


            ))}
        </div>
    )
}

export default TermsConditions;
