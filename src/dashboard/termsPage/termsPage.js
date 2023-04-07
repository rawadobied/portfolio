import React from 'react';

const TermsPage = (props) => {
    return(

        <div className={'container pt-2 pt-md-5'}>
            <h1>Terms & Conditions</h1>
            {
                data.map(d=>
                    <div className="my-5 col-12">
                        <h4 className={'text-decoration-underline'}>{d.title}</h4>
                        <small className={'mt-1'}>{d.text}</small>
                    </div>

                )
            }

    </div>)
};

export default TermsPage;





const data=[
    {
        title:"Acceptance of Terms",
        text:"By accessing or using this website, you agree to be bound by these terms and conditions, as well as any additional terms and conditions that may apply to specific areas of the website or to particular transactions with us."
    },
    {
        title:"User Conduct",
        text:"You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by any third party. You agree not to engage in any conduct that could damage, disable, overburden, or impair this website or interfere with any other party's use and enjoyment of this website."
    },
    {
        title:"Privacy",
        text:"Our privacy policy, which is incorporated by reference into these terms and conditions, outlines our practices regarding the collection, use, and disclosure of personal information."
    },
    {
        title:"Links to Third-Party Websites",
        text:"By accessing or using this website, you agree to be bound by these terms and conditions, as well as any additional terms and conditions that may apply to specific areas of the website or to particular transactions with us."
    },
    {
        title:"Disclaimer of Warranties",
        text:"THIS WEBSITE IS PROVIDED \"AS IS\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT. WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS."
    },
    {
        title:"Limitation of Liability",
        text:"IN NO EVENT SHALL WE OR OUR AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OF THIS WEBSITE OR THE INABILITY TO USE THIS WEBSITE, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, USE, DATA, OR OTHER INTANGIBLES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES."
    },
    {
        title:"Indemnification",
        text:"You agree to indemnify and hold us and our affiliates, officers, directors, employees, agents, and suppliers harmless from and against any claims, actions, suits, or proceedings, as well as any and all losses, liabilities, damages, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with your use of this website."
    },
    {
        title:"Governing Law",
        text:"These terms and conditions shall be governed by and construed in accordance with the laws of [Your State or Province], without giving effect to any principles of conflicts of law. You agree to submit to the personal jurisdiction of the courts located in [Your County or District] for the purpose of litigating all such claims or disputes."
    },
    {
        title:"Changes to Terms and Conditions",
        text:"We reserve the right to modify these terms and conditions at any time without prior notice. Your continued use of this website after any changes indicates your acceptance of the modified terms and conditions."
    }
]
