import java.util.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class NumerologyAnalyzer {

    // ... (calculateNumerology metodu aynı kalacak)

    // Burçlara göre tüm taşların listesi
    private static final Map<String, List<String>> ZODIAC_STONES = new HashMap<String, List<String>>() {{
        put("Koç", Arrays.asList(
            "Almandin", "Anyolit (Yakutlu Zoisit)", "Bixbite (Kırmızı Beril)", 
            "Garnet", "Granat (Lal Taşı)", "Hematit", "Kan Taşı (Helyotrop)", 
            "Karnelyan (Kırmızı Akik)", "Kırmızı Jasper", "Yakut (Ruby)", "Pirit"
        ));
        put("Boğa", Arrays.asList(
            "Ağaç Akik (Dendritic Agate)", "Aragonit", "Botswana Akik", 
            "Çilek Kuvars", "Krizopras", "Lületaşı", "Malakit", 
            "Mor Jade (Türkiyenit)", "Oniks", "Yeşil Akik", "Yeşim Taşı (Jade)", "Zümrüt"
        ));
        put("İkizler", Arrays.asList(
            "Akik", "Aleksandrit", "Apatit", "Beril", "Florit", 
            "Hemimorfit", "Herkimer Elması", "Kavansit", "Kyanit", 
            "Ortoklaz", "Rutil Kuvars", "Vivianite"
        ));
        put("Yengeç", Arrays.asList(
            "Abalone Kabuğu", "Akik", "Apofilit", "Aytaşı (Moonstone)", 
            "Dioptaz", "İnci", "Kalsedon", "Klorit Kuvars", 
            "Larimar", "Sedef", "Zultanit"
        ));
        put("Aslan", Arrays.asList(
            "Anyolit (Yakutlu Zoisit)", "Bronzit", "Elmas", "Güneş Taşı (Sunstone)", 
            "Heliodor", "Kalkopirit", "Karnelyan (Kırmızı Akik)", 
            "Lav Taşı", "Peridot", "Pırlanta (Elmas)", "Sitrin"
        ));
        put("Başak", Arrays.asList(
            "Ağaç Akik (Dendritic Agate)", "Amazonit", "Atakamit", 
            "Jasper", "Kyanit", "Kumtaşı (Arenite)", "Serpantin", "Thulite", 
            "Yeşil Akik"
        ));
        put("Terazi", Arrays.asList(
            "Akuamarin", "Anjelit (Angelite)", "Aytaşı (Moonstone)", 
            "Çilek Kuvars", "Diaspor", "Kuvars", "Morganit", "Opal", 
            "Selenit", "Turmalin", "Zoisit"
        ));
        put("Akrep", Arrays.asList(
            "Aleksandrit", "Almandin", "Ammonit Fosili", "Dumanlı Kuvars", 
            "Garnet", "Kedi Gözü Taşlar", "Obsidyen", "Oltu Taşı (Jet)", 
            "Turkuaz", "Yakut (Ruby)"
        ));
        put("Yay", Arrays.asList(
            "Ametrin", "Aventurin", "Epidot", "Lapis Lazuli", 
            "Lazulite", "Riyolit", "Safir", "Sodalit", "Turmalin", "Zirkon"
        ));
        put("Oğlak", Arrays.asList(
            "Afganit (Afghanite)", "Ammonit Fosili", "Aragonit", 
            "Hematit", "Larvikite", "Manyetit", "Oniks", "Sodalit", "Zirkon"
        ));
        put("Kova", Arrays.asList(
            "Afganit (Afghanite)", "Amazonit", "Aqua Aura Kuvars", 
            "Azeztulit Taşı", "Herkimer Elması", "İyolit", 
            "Moldavit", "Tanzanit", "Terahertz Taşı"
        ));
        put("Balık", Arrays.asList(
            "Abalone Kabuğu", "Akuamarin", "Ametist", 
            "Anjelit (Angelite)", "Kehribar (Amber)", "Lepidolit", 
            "Mercan", "Selenit", "Varisit"
        ));
    }};

    // Numerolojiye göre taşlar
    private static final Map<Integer, List<String>> NUMEROLOGY_STONES = new HashMap<Integer, List<String>>() {{
        put(1, Arrays.asList("Elmas", "Yakut", "Kuvars", "Pırlanta", "Granat"));
        put(2, Arrays.asList("Ay Taşı", "İnci", "Akuamarin", "Sedef", "Larimar"));
        put(3, Arrays.asList("Ametist", "Turmalin", "Topaz", "Opal", "Kyanit"));
        put(4, Arrays.asList("Kehribar", "Yeşim", "Obsidyen", "Hematit", "Oniks"));
        put(5, Arrays.asList("Turkuaz", "Akik", "Sitrin", "Aventurin", "Kalsedon"));
        put(6, Arrays.asList("Safir", "Zümrüt", "Kuvars", "Morganit", "Malakit"));
        put(7, Arrays.asList("Kiyanit", "Lapis Lazuli", "Florit", "Selenit", "Amazont"));
        put(8, Arrays.asList("Oniks", "Kaplan Gözü", "Hematit", "Obsidyen", "Larvikite"));
        put(9, Arrays.asList("Yakut", "Granat", "Rodonit", "Kırmızı Jasper", "Pirit"));
    }};

    // Doğum tarihinden numeroloji hesapla
    public static int calculateBirthNumerology(LocalDate date) {
        int total = date.getDayOfMonth() + date.getMonthValue() + date.getYear();
        return reduceToSingleDigit(total);
    }

    private static int reduceToSingleDigit(int number) {
        while (number > 9 && number != 11 && number != 22 && number != 33) {
            int sum = 0;
            while (number > 0) {
                sum += number % 10;
                number /= 10;
            }
            number = sum;
        }
        return number;
    }

    // Önerilen taşları bul
    public static List<String> suggestStones(int nameNum, int birthNum, String zodiac) {
        List<String> zodiacStones = ZODIAC_STONES.getOrDefault(zodiac, new ArrayList<>());
        List<String> nameStones = NUMEROLOGY_STONES.getOrDefault(nameNum, new ArrayList<>());
        List<String> birthStones = NUMEROLOGY_STONES.getOrDefault(birthNum, new ArrayList<>());

        // Ortak taşları bul
        Set<String> common = new HashSet<>(nameStones);
        common.retainAll(birthStones);
        
        // Tüm taşları birleştir
        Set<String> allStones = new LinkedHashSet<>();
        allStones.addAll(common);
        allStones.addAll(zodiacStones);
        allStones.addAll(nameStones);
        allStones.addAll(birthStones);

        return new ArrayList<>(allStones).subList(0, Math.min(allStones.size(), 5));
    }

    // ... (getZodiacSign ve getPlanetAndSoulNumber metodları aynı kalacak)

    public static void main(String[] args) {
        // ... (main metodunun başlangıcı aynı)

            int nameNum = calculateNumerology(fullName);
            int birthNum = calculateBirthNumerology(birthDate);
            List<String> stones = suggestStones(nameNum, birthNum, zodiacSign);

            // Çıktı kısmında "Uğurlu Sayı" yerine "Ruh Sayısı" yaz
            System.out.println("Ruh Sayısı: " + soulNumber);

        // ... (main metodu sonu aynı)
    }
}
