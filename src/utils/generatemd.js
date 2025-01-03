// Import instead of require
import fs from 'fs';
import path from 'path';

// Ensure __dirname compatibility in ES modules
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cards = [
    {
        title: "Jews in Modern Islamic Contexts",
        description: "The study of Jewish life in modern Islamic contexts during the 2018-19 Fellowship year at the Katz Center delved into the meaning of modernity in North Africa, the Levant, the Arabian Peninsula, Central and South Asia. In their work, the Fellows broke new ground by looking beyond the more familiar paradigms of modern and contemporary Jewish history in European, American, and Israeli contexts to explore complex relationships between Jews and their Muslim neighbors, or with members of other non-Muslim communities in the Islamic world.",
        date: "2018-2019"
    },
    {
        title: "Nature between Science and Religion: Jewish Culture and the Natural World ('17–'18)",
        description: "During its 2017-2018 fellowship year, scholars at the Herbert D. Katz Center for Advanced Judaic Studies asked new questions about how the history of science, medicine and technology may be seen from the perspective of Jewish culture.",
        date: "2017-2018"
    },
    {
        title: "Expanding Jewish Political Thought: Beneath, between, before, & beyond the state ('16–'17)",
        description: "The 2016-17 Katz-Penn Libraries Web Exhibition brought together scholars working in a variety of fields of theory and praxis to unsettle regnant paradigms of power, authority, political action or inaction, law, human rights, gender inequalities, territorial sovereignty, and statehood.",
        date: "2016-2017"
    },
    {
        title: "Jews beyond Reason ('15-'16)",
        description: "Focusing on the experiential, the sensual, as well as philosophical and theological reflections that occur within and beyond the rational dimension of human life.",
        date: "2015-2016"
    },
    {
        title: "Doing Wissenschaft: The Active Study of Judaism as Practice, 1818 - 2018 ('14-'15)",
        description: "This past year's Fellows explored critical questions about the way in which academic categories and methodologies have framed how Jews and Judaism are understood.",
        date: "2014-2015"
    },
    {
        title: "Constructing Borders & Crossing Boundaries: Social, Cultural, & Religious Change in Early Modern Jewish History ('13-'14)",
        description: "Scholars came together in 2013-14 to bridge often disconnected areas of scholarship to examine early modern Jewish history.",
        date: "2013-2014"
    },
    {
        title: "13th Century Entanglements: Judaism, Christianity & Islam ('12-'13)",
        description: "This exhibition reexamines the formative period in Islamic history between the 7th and the 11th century.",
        date: "2012-2013"
    },
    {
        title: "Jews & Journeys: Travel & the Performance of Jewish Identity ('11-'12)",
        description: "The subject of travel and its complex range of practices and representations have provoked intense scholarly interest in recent years.",
        date: "2011-2012"
    },
    {
        title: "Taking Turns: New Perspectives on Jews & Conversion ('10-'11)",
        description: "Taking Turns takes as its starting point the idea of converts and conversion - an unstable subject and a model of individual and group life.",
        date: "2010-2011"
    },
    {
        title: "Secularism & Its Discontents: Rethinking an organizing principle of modern Jewish life ('09-'10)",
        description: "This exhibition about secularism and its discontents examines the complex interplay and often permeable boundary between the religious and the secular.",
        date: "2009-2010"
    },
    {
        title: "Jews, Commerce, & Culture ('08-'09)",
        description: "This exhibition on Jewish economic history argues that economics is not solely materialist and quantitative in nature but an integral part of Jewish religion and folkways.",
        date: "2008-2009"
    },
    {
        title: "Jewish & Other Imperial Cultures in Late Antiquity ('07-'08)",
        description: "Scholars of late antiquity grapple with the complex and multifarious material sources and received texts upon which our understanding of the Roman empire and its minorities is built.",
        date: "2007-2008"
    },
    {
        title: "Religious Communities in Islamic Empires ('06-'07)",
        description: "This exhibition reexamines the formative period in Islamic history between the 7th and the 11th century to understand how both Muslim and Jewish societies were shaped in this period.",
        date: "2006-2007"
    },
    {
        title: "The Jewish Book Material Texts and Comparative Contexts ('05-'06)",
        description: "This exhibition investigates how the materiality and formatting of texts from antiquity to the present shaped authorship, transmission, reception, and interpretation.",
        date: "2005-2006"
    },
    {
        title: "Modern Jewish Literatures: Language, Identity, Writing ('04-'05)",
        description: "This exhibition on Jewish Literatures in the Modern Age explores how literature became a site of intense struggle around Jewishness and modernity.",
        date: "2004-2005"
    },
    {
        title: "Challenging Boundaries: History and Anthropology in Jewish Studies ('03-'04)",
        description: "Scholars of Jewish history and anthropology explore the tensions between normative religious traditions and lived experiences in Jewish culture.",
        date: "2003-2004"
    },
    {
        title: "Tradition and Its Discontents: Jewish History and Culture in Eastern Europe ('02–'03)",
        description: "This exhibition considers Eastern Europe as home to the greatest living reservoir of Jewish civilization for over three centuries.",
        date: "2002-2003"
    },
    {
        title: "And We have Revealed to You..., Jewish Biblical Interpretation in a Comparative Context: Introduction ('01-'02)",
        description: "This exhibition presents the common scriptural heritage of Judaism, Christianity, and Islam while highlighting the distinctive traditions of biblical interpretation.",
        date: "2001-2002"
    },
    {
        title: "Modern Jewry and the Arts ('00–'01)",
        description: "This exhibition presents work in a rich diversity of cultural media and genres to explore modern Jewish aesthetic production.",
        date: "2000-2001"
    }
];

cards.forEach((card) => {
    const slug = card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const content = `---
title: "${card.title}"
description: "${card.description}"
date: "${card.date}"
hero:
  title: "${card.title}"
  tagline: "A Reflection on ${card.title}"
slug: "${slug}"
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
template: doc
---

# ${card.title}

(Add body content for "${card.title}" here.)
`;

    fs.writeFileSync(path.join(__dirname, `${slug}.md`), content);
    console.log(`Created: ${slug}.md`);
});