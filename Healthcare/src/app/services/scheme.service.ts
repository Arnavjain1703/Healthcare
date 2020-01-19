import { scheme } from '../models/scheme.model';

export class schemeService
{

     private Schemes :scheme[]=
     [
       new scheme('Reproductive, Maternal, Newborn, Child and Adolescent Health (RMNCH+A)','  Reproductive, Maternal, Newborn, Child and Adolescent Health (RMNCH+A) programme essentially looks to address the major causes of mortality among women and children as well as the delays in accessing and utilizing health care and services. It also introduces new initiatives like the use of Score Card to track health performance, National Iron + Initiative to address the issue of anemia across all age groups and the Comprehensive Screening and Early interventions for defects at birth, diseases, and deficiencies among children and adolescents.'),

       new scheme('Rashtriya Bal Swasthya Karyakram (RBSK) ','Rashtriya Bal Swasthya Karyakram (RBSK) is an important initiative aiming at early identification and early intervention for children from birth to 18 years to cover 4 ‘D’s viz. Defects at birth, Deficiencies, Diseases, Development delays including disability. Early detection and management diseases including deficiencies bring added value in preventing these conditions to progress to its more severe and debilitating form'),

       new scheme(' The Rashtriya Kishor Swasthya Karyakram','The key principle of this programme is adolescent participation and leadership, Equity and inclusion, Gender Equity and strategic partnerships with other sectors and stakeholders. The programme enables all adolescents in India to realize their full potential by making informed and responsible decisions related to their health and well-being and by accessing the services and support they need to do so.'),
         
       new scheme('National AIDS Control Organisation ',' National AIDS Control Organisation was set up so that every person living with HIV has access to quality care and is treated with dignity. By fostering close collaboration with NGOs, women’s self-help groups, faith-based organizations, positive people’s networks, and communities, NACO hopes to improve access and accountability of the services. It stands committed to building an enabling environment wherein those infected and affected by HIV play a central role in all responses to the epidemic – at state, district and grassroots level.' ),

       new scheme(' Revised National TB Control Programme',' Revised National TB Control Programme is a state-run tuberculosis control initiative of Government of India with a vision of achieving a TB free India. The program provides, various free of cost, quality tuberculosis diagnosis and treatment services across the country through the government health system.'),
    
       new scheme(' National Leprosy Eradication Programme ',' National Leprosy Eradication Programme was initiated by the government for Early detection through active surveillance by the trained health workers and to provide Appropriate medical rehabilitation and leprosy ulcer care services.'),

       new scheme('Mission Indradhanush','The Government of India has launched Mission Indradhanush with the aim of improving coverage of immunization in the country. It aims to achieve at least 90 percent immunization coverage by December 2018 which will cover unvaccinated and partially vaccinated children in rural and urban areas of India.'),

       new scheme('National Mental Health Program',' In order to address the huge burden of mental disorders and the shortage of qualified professionals in the field of mental health, Government of India has implemented National Mental Health Program to ensure the availability and accessibility of minimum mental healthcare for all in the foreseeable future.'),

       new scheme('Pulse Polio','is an immunization campaign established by the government of India to eliminate polio in India by vaccinating all children under the age of five years against the polio virus'),

       new scheme('Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)','The Pradhan Mantri Swasthya Suraksha Yojana (PMSSY) was announced with objectives of correcting regional imbalances in the availability of affordable/ reliable tertiary healthcare services and also to augment facilities for quality medical education in the country by setting up of various institutions like AIIMS and upgrading government medical college institutions.'),

       new scheme('Rashtriya Arogya Nidhi','  Since there are huge income disparities, therefore, the government has launched several programmes in order to support the financially backward class of the country. As about 3.2 crore people in India fall under the National Poverty line by spending on healthcare from their own pockets in a single year. The most important programme launched by the government is Rashtriya Arogya Nidhi which provides financial assistance to the patients that are below poverty line and are suffering from life-threatening diseases, to receive medical treatment at any government run super specialty hospital/ institution.'),

       new scheme(' National Tobacco Control Programme','   National Tobacco Control Programme was launched with the objective to bring about greater awareness about the harmful effects of tobacco use and about the Tobacco Control Laws and to facilitate the effective implementation of the Tobacco Control Laws.'),
       
       new scheme('Integrated Child Development Service','Integrated Child Development Service was launched to improve the nutrition and health status of children in the age group of 0-6 years, lay the foundation for proper psychological, physical and social development of the child, effective coordination and implementation of policy among the various departments and to enhance the capability of the mother to look after the normal health and nutrition needs through proper nutrition and health education.'),

       new scheme(' Rashtriya Swasthya Bima Yojana','Rashtriya Swasthya Bima Yojana is a government-run health insurance programme for the Indian poor. It aims to provide health insurance coverage to the unrecognized sector workers belonging to the below poverty line and their family members shall be beneficiaries under this scheme.')
    ]

     getschemes()
     {
         return this.Schemes.slice();
     }

}