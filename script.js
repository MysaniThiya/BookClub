document.addEventListener('DOMContentLoaded', () => {

    // Data Mapping for Books (Including Category)

    const bookData = {
        // Featured Books
        'image/book_1.jpg': { title: 'Shatter Me', writer: 'Tahereh Mafi', category: 'Young Adult Dystopian Romance', summary: 'A thrilling dystopian novel exploring power, isolation, and survival. The story follows a teenage girl with a lethal touch navigating a totalitarian regime and the unexpected emotional transformations that come with discovering her own strength.' },
        'image/book_2.jpg': { title: 'The Sublet', writer: 'Tessa F. Grayson', category: 'Psychological Thriller', summary: "A gripping standalone thriller about a woman inadvertently stepping into a missing person's life. The story follows a recent divorcee who moves into a cheap apartment, only to find the previous tenant vanished without a trace, leaving behind a calendar that she compulsively begins to live out." },
        'image/book_3.jpg': { title: 'Dirt', writer: 'Bill Buford', category: 'Culinary Memoir', summary: 'A lively and immersive journey into the high-stakes world of French cuisine. An American journalist uproots his family to Lyon, France, enduring grueling apprenticeships in top kitchens and bakeries to master the secrets of classical cooking.' },
        'image/book_4.jpg': { title: 'The Kite Runner', writer: 'Khaled Hosseini', category: 'Historical Fiction / Drama', summary: 'A powerful tale of friendship, betrayal, and the agonizing price of redemption set against the backdrop of Afghanistan’s turbulent history. The story follows a wealthy Kabul boy haunted by his childhood cowardice against his loyal friend and servant, leading him on a perilous journey decades later to right his past wrongs.' },
        'image/book_5.jpg': { title: 'Cleverlands', writer: 'Lucy Crehan', category: 'Education & Culture', summary: 'An insightful exploration into top-performing educational systems worldwide. The author travels to global classrooms to uncover how cultures foster student success.' },
        'image/book_6.jpg': { title: 'Shattered', writer: 'Dick Francis', category: 'Crime Fiction', summary: 'A glassblower is drawn into a high-stakes mystery after receiving dangerous videotapes belonging to a deceased steeplechase jockey.' },
        'image/book_7.png': { title: 'Sea Prayer', writer: 'Khaled Hosseini', category: 'Contemporary Fiction / Psychological Drama', summary: 'A gripping and poignant story of survival, resilience, and the fierce bond between a mother and child. Told entirely from the perspective of a five-year-old boy, the novel chronicles his life inside an eleven-by-eleven-foot room where he and his mother are held captive, and their harrowing attempt to escape into the overwhelming outside world.' },
        'image/book_8.png': { title: 'Room', writer: 'Emma Donoghue', category: 'Music & History', summary: 'A tribute to the origins, evolution, and golden eras of rock music culture. Explores iconic instruments, albums, and sound movements across generations.' },
        'image/book_9.jpg': { title: 'Freefall', writer: 'Peter Cawdron', category: 'Science Fiction', summary: 'A high-concept sci-fi survival story following an intense emergency descent toward an unknown planetary surface. Critical thinking is vital for survival.' },
        'image/book_10.png': { title: 'Wild', writer: 'Cheryl Strayed', category: 'Biography & Memoir', summary: 'A powerful memoir of loss, healing, and self-discovery on the Pacific Crest Trail. Following the devastating loss of her mother, a young woman embarking on an impulsive eleven-hundred-mile solo hike finds her limits tested and her spirit restored by the unforgiving wilderness.' },
        'image/book_11.jpg': { title: 'Boring Girls', writer: 'Sara Taylor', category: 'Dark Fiction', summary: 'Two social outcasts bond over heavy metal music and form an intense, dangerous friendship. As frustration grows, their outlet turns into a dark pact of revenge.' },
        'image/book_12.png': { title: 'Dry', writer: 'Neal Shusterman', category: 'Young Adult Thriller', summary: 'A fast-paced survival thriller set during a catastrophic California drought. When the taps completely run dry, a suburban teenage girl must make brutal choices to protect her younger brother and navigate a rapidly disintegrating society.' },
        'image/book_13.png': { title: 'Home', writer: 'Toni Morrison', category: 'Historical Fiction', summary: 'A deeply moving story of trauma, healing, and family bonds in 1950s America. A traumatized Korean War veteran escapes a mental hospital to rescue his estranged sister from a medical abuse situation, journeying back to a hometown they both once hated.' },
        'image/book_14.png': { title: 'Void', writer: 'Rhiannon Frater', category: 'Sci-Fi Horror', summary: 'A tense cosmic horror novel centered on isolation and psychological terror in deep space. When a salvage crew investigates a completely silent, abandoned research vessel, they accidentally unleash an ancient entity that feeds on their worst fears.' },
        'image/book_15.png': { title: 'Night', writer: 'Elie Wiesel', category: 'Biography & Memoir', summary: 'A terrifyingly candid memoir documenting the horrors of the Holocaust through the eyes of a young boy. The narrative follows his grueling journey through the Auschwitz concentration camp, exploring the depths of human cruelty and the ultimate test of personal faith.' },

        // New Arrivals
        'image/arrival_1.jpg': { title: 'The Giver', writer: 'Lois Lowry', category: 'Dystopian Fiction', summary: 'Twelve-year-old Jonas lives in a seemingly perfect, emotionless society without pain or choice. Selected as Receiver of Memory, he uncovers dark community secrets.' },
        'image/arrival_2.jpg': { title: 'The Wright Brothers', writer: 'David McCullough', category: 'Biography / History', summary: 'The compelling true story of Wilbur and Orville Wright and their quest to achieve human flight through relentless experimentation and mechanical skill.' },
        'image/arrival_3.jpg': { title: 'Radical Gardening', writer: 'George McKay', category: 'Social History', summary: 'An exploration of how gardens have historically been used as sites of political protest, community action, and social change across generations.' },
        'image/arrival_4.jpg': { title: 'Red Queen', writer: 'Victoria Aveyard', category: 'Fantasy & YA', summary: 'In a world divided by blood color, Mare Barrow discovers she possesses deadly abilities despite her Red blood, entangling her in royal intrigue and rebellion.' },
        'image/arrival_5.jpg': { title: 'To Kill a Mockingbird', writer: 'Harper Lee', category: 'Classic Literature', summary: 'Set in the American South, young Scout Finch recounts her father Atticus defending a Black man falsely accused of a crime, confronting deep racial injustice.' },
        'image/arrival_6.jpg': { title: 'Harry Potter', writer: 'J.K. Rowling', category: 'Fantasy & Adventure', summary: 'An orphaned boy discovers on his eleventh birthday that he is a famous wizard destined for greatness. He travels to Hogwarts to unravel a dark mystery.' },
        'image/arrival_7.jpg': { title: 'The Lost Hero', writer: 'Rick Riordan', category: 'Mythology & Fantasy', summary: 'Jason wakes up on a school bus with total memory loss. Alongside demigod friends Piper and Leo, he embarks on a quest to rescue Hera and stop ancient evil.' },
        'image/arrival_8.webp': { title: 'Diary of a Wimpy Kid', writer: 'Jeff Kinney', category: 'Humor & Children', summary: 'Middle-schooler Greg Heffley documents his daily struggles through handwritten notes and simple comic doodles, offering a humorous look at growing up.' },
        'image/arrival_9.jpg': { title: 'The Ruins of Gorlan', writer: 'John Flanagan', category: 'Action / Adventure', summary: 'Will, an undersized orphan, is chosen to become an apprentice to the mysterious Rangers who protect the kingdom, training in tracking and stealth.' },
        'image/arrival_10.jpg': { title: 'The Lightning Thief', writer: 'Rick Riordan', category: 'Mythology & Fantasy', summary: 'Percy Jackson discovers he is a demigod son of Poseidon. Accused of stealing Zeus\'s master lightning bolt, he sets off across America to recover it.' }
    };

    // Inject Modal Layout Dynamic HTML

    const modalHTML = `
        <div id="bookModal" class="custom-modal">
            <div class="custom-modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-body-container">
                    <img id="modalImg" src="" alt="Book Cover">
                    <div class="modal-info">
                        <h2 id="modalTitle" class="modal-title"></h2>
                        <div class="modal-meta-row">
                            <span class="modal-author-text">By <strong id="modalAuthor"></strong></span>
                            <span id="modalCategory" class="category-badge"></span>
                        </div>
                        <div class="modal-divider"></div>
                        <p id="modalSummary" class="modal-summary-text"></p>
                        <a id="modalReadBtn" href="image/dummy.pdf" target="_blank" class="modal-read-btn">Click to Read PDF</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('bookModal');
    const closeModal = document.querySelector('.close-modal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalCategory = document.getElementById('modalCategory');
    const modalSummary = document.getElementById('modalSummary');


    // Handle "Learn More" Click Event (Modal)
  
    document.querySelectorAll('.learn_more').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const card = button.closest('.featured_book_card, .arrivals_card');
            const imgElement = card.querySelector('img');
            const imgSrc = imgElement ? imgElement.getAttribute('src') : '';

            // Get details from dictionary with fallback options
            const details = bookData[imgSrc] || {
                title: 'Featured Book',
                writer: card.querySelector('.writer')?.textContent || 'John Deo',
                category: 'General Fiction',
                summary: 'Explore this incredible selection from our digital catalog. Click read to open the complete PDF file.'
            };

            modalImg.src = imgSrc;
            modalTitle.textContent = details.title;
            modalAuthor.textContent = details.writer;
            modalCategory.textContent = details.category;
            modalSummary.textContent = details.summary;

            modal.style.display = 'flex';
        });
    });

    // Close Modal Events
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle "Click to Read" PDF Opening

    document.querySelectorAll('.f_btn, .arrivals_btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('image/dummy.pdf', '_blank');
        });
    });

    // Smooth Scroll Navigation Setup

    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Example simple subscribe script
    const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('input').value;
                alert(`Thank you for subscribing us! You will now receive weekly book recommendations and exclusive Author Event invites.`);
                newsletterForm.reset();
            });
        }

    // Live Search Functionality for Navigation Bar
    const searchInput = document.getElementById('bookSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            document.querySelectorAll('.featured_book_card, .arrivals_card').forEach(card => {
                // Read image filename to map to bookData dictionary
                const img = card.querySelector('img');
                const src = img ? img.getAttribute('src') || '' : '';
                
                // Find matching key in bookData dictionary regardless of relative paths
                const matchKey = Object.keys(bookData).find(key => src.endsWith(key.replace('image/', '')));
                const data = matchKey ? bookData[matchKey] : {};

                // Combine title, author, category, and inner HTML text into one searchable string
                const searchContent = `${data.title || ''} ${data.writer || ''} ${data.category || ''} ${card.innerText || card.textContent}`.toLowerCase();

                // Show matching cards and hide non-matching cards
                if (query === '' || searchContent.includes(query)) {
                    card.removeAttribute('style');
                } else {
                    card.setAttribute('style', 'display: none !important;');
                }
            });
        });
    }

});

