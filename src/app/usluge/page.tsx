export default function UslugePage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold md:text-4xl">Usluge</h1>
      <p className="mt-3 max-w-2xl text-white/75">
        Specijalizovani za VAG grupu (VW, Audi, Seat, Škoda). Radimo dijagnostiku,
        kodiranje, servis i popravke uz garanciju na ugradnju i djelove.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          "Redovni servis",
          "Dijagnostika (VAG)",
          "Kodiranje i adaptacije",
          "Softverska ažuriranja",
          "Kočioni sistem",
          "Trap i ogibljenje",
          "Sistem hlađenja",
          "Elektronika",
          "Ugradnja djelova uz garanciju",
        ].map((title) => (
          <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-white/70">
              Detalje možemo dodati kasnije (i po kategorijama).
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="font-medium">Garancija</div>
        <p className="mt-2 text-sm text-white/70">
          Garancija na ugradnju i djelove: od 1 mjesec do 2 godine (u zavisnosti od dijela i usluge).
        </p>
      </div>
    </div>
  );
}
